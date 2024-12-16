import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../contexts/CartContext'
import { addDoc, collection, serverTimestamp, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'
import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.css';

const CheckoutUseForm = () => {
    const [orderNumber, setOrderNumber] = useState([])
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const { cart, cartTotal, clear } = useContext(CartContext)

    const onSubmit = async (dataDelForm) => {
        try {
            const productsCollection = collection(db, "Items");
            const res = await getDocs(productsCollection);

            const productosDB = res.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            const stockIssues = cart.filter(cartItem => {
                const producto = productosDB.find(dbItem => dbItem.id === cartItem.id);

                return !producto || producto.stock < cartItem.cantidad;
            });

            if (stockIssues.length > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Algunos productos no tienen suficiente stock o no existen.",
                    showConfirmButton: false,
                    timer: 1500,
                });
                return;
            }
            const orderNumber = Math.floor(Date.now() / 1000);
            const order = {
                number: orderNumber,
                buyer: {
                    name: dataDelForm.nombre,
                    address: dataDelForm.direccion,
                    email: dataDelForm.email1,
                    phone: dataDelForm.telefono,
                },
                carrito: cart,
                total: cartTotal(),
                date: serverTimestamp(),
            };

            const ventas = collection(db, "orders");
            const orderRef = await addDoc(ventas, order);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Pedido realizado con éxito. Número de orden: ${orderNumber}`,
                showConfirmButton: false,
                timer: 1500,
            });

            setOrderNumber([orderNumber, orderRef.id]);
            clear();

        } catch (error) {
            console.error("Error al procesar la orden:", error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Ocurrió un error al procesar la orden. Intente nuevamente.",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };


    return (
        <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            {orderNumber.length > 0 ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-green-600">Muchas gracias por tu compra</h2>
                    <h4 className="text-lg mt-2">Tu número de orden es: <span className="font-mono">{orderNumber[0]}</span></h4>
                    <h4 className="text-lg mt-2">Tu Identificador es: <span className="font-mono">{orderNumber[1]}</span></h4>
                </div>
            ) : (
                <div>
                    <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Nombre</label>
                            <input
                                className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                {...register("nombre", { required: true, minLength: 3 })}
                            />
                            {errors?.nombre?.type === "required" && (
                                <p className="text-red-500 text-sm mt-1">Por favor complete el campo Nombre</p>
                            )}
                            {errors?.nombre?.type === "minLength" && (
                                <p className="text-red-500 text-sm mt-1">El nombre debe tener mínimo 3 caracteres</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Dirección</label>
                            <input
                                className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                {...register("direccion", { required: true, minLength: 10, maxLength: 35 })}
                            />
                            {errors?.direccion?.type === "required" && (
                                <p className="text-red-500 text-sm mt-1">Por favor complete el campo Dirección</p>
                            )}
                            {errors?.direccion?.type === "minLength" && (
                                <p className="text-red-500 text-sm mt-1">La dirección tiene que contener mínimo 10 caracteres</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                type="email"
                                name="email1"
                                {...register("email1", { required: true })}
                            />
                            {errors?.email1?.type === "required" && (
                                <p className="text-red-500 text-sm mt-1">Por favor complete el campo Email</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Confirmación de Email</label>
                            <input
                                className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                type="email"
                                name="email2"
                                {...register("email2", {
                                    required: true,
                                    validate: {
                                        equalMails: (mail2) => mail2 === getValues().email1,
                                    },
                                })}
                            />
                            {errors?.email2?.type === "required" && (
                                <p className="text-red-500 text-sm mt-1">Por favor complete el campo de Confirmación de Email</p>
                            )}
                            {errors?.email2?.type === "equalMails" && (
                                <p className="text-red-500 text-sm mt-1">Los emails deben ser iguales</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Teléfono</label>
                            <input
                                className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                type="tel"
                                name="telefono"
                                {...register("telefono", { required: true, pattern: /^[0-9]{10}$/ })}
                            />
                            {errors?.telefono?.type === "required" && (
                                <p className="text-red-500 text-sm mt-1">Por favor complete el campo Teléfono</p>
                            )}
                            {errors?.telefono?.type === "pattern" && (
                                <p className="text-red-500 text-sm mt-1">El teléfono debe tener 10 dígitos</p>
                            )}
                        </div>
                        <button
                            className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                            disabled={!cart.length}
                        >
                            Confirmar Compra
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default CheckoutUseForm

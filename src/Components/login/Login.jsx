import React from "react"
export default function Login() {
    return <div className="w-full flex items-center justify-center h-auto bg-gray-200">
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-md px-10 py-20 my-20">
            <h2 className="text-3xl font-semibold md:text-5xl md:font-semibold">Connecter a votre compte</h2>
            <p className="font-medium text-lg text-gray-600 mt-4 text-center">Entrer vos informations</p>
            <div className="mt-8">
     
                <div>
                    <label style={{fontFamily:"Roboto"}} className="text-lg font-medium">Email</label>
                    <input className="w-full border-2 border-gray-200 rounded-lg p-2 mt-1 bg-transparent" type="email" placeholder="Adresse Email"/>
                </div>
   
                <div className="mt-4">
                    <label style={{fontFamily:"Roboto"}} className="text-lg font-medium">Mot de passe</label>
                    <input className="w-full border-2 border-gray-200 rounded-lg p-2 mt-1 bg-transparent" type="password" placeholder="Mot de passe"/>
                </div>
                <div  className="mt-4">
                    <label style={{fontFamily:"Roboto"}} className="text-lg font-medium">Role</label>
                    <select className="w-full border-2 border-gray-200 rounded-lg p-2 mt-1 bg-transparent">
                        <option style={{fontFamily:"Roboto"}}>Enseignant</option>
                        <option style={{fontFamily:"Roboto"}}>Doctorant</option>
                        <option style={{fontFamily:"Roboto"}}>Administrateur</option>
                    </select>
                </div>
                <div className="flex justify-between items-center mt-4">
                     <div>
                        <input type="checkbox" id="remember"/>
                        <label style={{fontFamily:"Roboto"}} className="ml-2 font-medium text-base hover:text-gray-700" for="remember">Remember me</label>
                     </div>
                     <button style={{fontFamily:"Roboto"}} className="hover:text-blue-600 hover:underline">Mot de passe oublie</button>
                </div>
                <div>
                    <button style={{fontFamily:"Roboto"}} className="active:scale-[.98] active:duration-75 transition-all w-full hover:scale-[1.01] ease-in-out hover:bg-blue-800 mt-8 bg-blue-700 text-white rounded-lg p-2 text-center font-bold text-lg">Log in</button>
                </div>
            </div>
            </div>
        </div>
}
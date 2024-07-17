import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../lib/firebase";
import GoogleButton from "react-google-button";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function LoginPage() {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    const googleSignIn = async () => {
        try {
            const res = await signInWithGoogle()
            await setDoc(doc(db, "users", res.user.uid), {
                avatar: res.user.photoURL,
                username: "",
                firstName: res.user.displayName.split(' ')[0],
                lastName: res.user.displayName.split(' ')[1],
                email: res.user.email,
                birthDate: "",
                id: res.user.uid,
                blocked: []
            });
            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],
            })
            Swal.fire({
                text: "Login success!",
                icon: "success"
            });
            navigate('/app')
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Oops...",
                text: error.message,
                icon: "error"
            });
        }

    };

    const handleLogin = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { email, password } = Object.fromEntries(formData)
        try {
            await signInWithEmailAndPassword(auth, email, password)
            Swal.fire({
                text: "Login success!",
                icon: "success"
            });
            navigate('/app')
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Oops...",
                text: error.message,
                icon: "error"
            });
        }
    }

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Welcome back to ChattingYuk!
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <label className="label" style={{ fontSize: 13 }}>
                                <span>Don't have an account? <Link to={'/register'} className="link link-hover">Register here</Link></span>
                            </label>
                        </form>
                        <div className="flex justify-center mb-3">
                            <GoogleButton style={{ borderRadius: 5 }} onClick={googleSignIn} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
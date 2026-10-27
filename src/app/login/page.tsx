/* eslint-disable @next/next/no-img-element */
'use client';
import { useActionState, useState } from "react";
import { GoogleLogin, login } from "../actions/auth";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Login() {
    const [showPass, setShowPass] = useState(false);
    const [state, action, isPending] = useActionState(login, undefined);
    const params = useSearchParams();
    const redirect = params.get('redirect') || '/';
    console.log(redirect);

    return (
        <div className="w-full h-full max-w-[1200px] bg-[#13131a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full md:w-1/2 relative">
                <Link href="/" className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors z-10">
                    Back to website →
                </Link>
                <div className="relative h-full">
                    {/* <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1737831467/abhiraj_tdwxdf.webp"
                        alt="Desert landscape"
                        className="w-full h-full object-cover" /> */}

                    <img src='/image/auth.jpg'
                        alt="Desert landscape"
                        className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-purple-900/30"></div>
                    <div className="absolute bottom-12 left-12 text-white">
                        {/* <h2 className="text-2xl md:text-4xl font-semibold mb-2">Capturing Moments,</h2>
                        <h2 className="text-2xl md:text-4xl font-semibold">Creating Memories</h2> */}
                        {/* <div className="flex gap-2 mt-6">
                            <div className="w-4 h-1 bg-white/30 rounded"></div>
                            <div className="w-4 h-1 bg-white/30 rounded"></div>
                            <div className="w-4 h-1 bg-white rounded"></div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 p-6 md:p-12">
                <div className="max-w-md mx-auto">
                    <h1 className="text-white text-2xl md:text-4xl font-semibold mb-2">Log In</h1>
                    <p className="text-gray-400 mb-8">
                        Did not have a account?{" "}
                        <Link href="/register" className="text-white hover:underline">Sign Up</Link>
                    </p>

                    <form action={action} className="space-y-4">
                        {/* <div className="flex flex-col md:flex-row gap-4">
              <input type="text" name="firstName" placeholder="First name" className="w-full md:w-1/2 bg-[#1c1c24] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600" />
              <input type="text" name="lastName" placeholder="Last name" className="w-full md:w-1/2 bg-[#1c1c24] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div> */}

                        <input type="hidden" name="redirect" value={redirect} />

                        <div>
                            <input type="email" name="email" placeholder="Email" className="w-full bg-[#1c1c24] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600" defaultValue={state?.fields?.email ?? ''} />
                            {state?.errors?.email && <p className="text-red-400 mt-1 text-sm">{state.errors.email}</p>}
                        </div>

                        <div className="relative">
                            <input type={`${showPass ? 'text' : 'password'}`} name="password" placeholder="Enter your password" className="w-full bg-[#1c1c24] text-white rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600" />
                            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2">
                                <EyeClosed
                                    color="coral"
                                    onClick={() => {
                                        setShowPass(true)
                                    }}
                                    className={`${showPass ? 'hidden' : ''}`}
                                />
                                <Eye
                                    color="coral"
                                    onClick={() => {
                                        setShowPass(false)
                                    }}
                                    className={`${!showPass ? 'hidden' : ''}`}
                                />
                            </button>
                        </div>
                        {state?.errors?.password && <p className="text-red-400 mt-1 text-sm">{state.errors.password}</p>}

                        {/* <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" name="terms" className="rounded bg-[#1c1c24] border-gray-600 text-purple-600 focus:ring-purple-600" />
              <span className="text-gray-400">I agree to the <a href="#" className="text-white hover:underline">Terms & Conditions</a></span>
            </label> */}

                        <button type="submit" disabled={isPending} className="w-full bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 transition-colors disabled:opacity-50">
                            {isPending ? "Signing In..." : "Sign In"}
                        </button>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-[#13131a] text-gray-400">Or Login with</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <a
                                href="#"
                                className="group relative w-full flex items-center justify-center gap-2 bg-[#1c1c24] text-white rounded-lg p-3 hover:bg-[#25252e] transition-all"
                                onClick={(e) => {
                                    e.preventDefault()
                                    GoogleLogin(redirect)
                                }}
                            >
                                {/* 1. MANUALLY POSITIONED GLOW ZONES (Behind the button) */}
                                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-105">
                                    {/* RIGHT: Google Blue Glow */}
                                    <div className="absolute right-[-4px] top-1/4 bottom-1/4 w-[8px] bg-[#4285F4] blur-xl opacity-80" />
                                    {/* TOP: Aggressive Google Red Glow */}
                                    <div className="absolute top-[-4px] left-1/4 right-1/4 h-[8px] bg-[#EA4335] blur-xl opacity-100" />
                                    <div className="absolute top-[-2px] left-1/3 right-1/3 h-[4px] bg-[#EA4335] blur-md opacity-100" />


                                    {/* BOTTOM: Google Green Glow */}
                                    <div className="absolute bottom-[-4px] left-1/4 right-1/4 h-[8px] bg-[#34A853] blur-xl opacity-80" />

                                    {/* LEFT: Google Yellow Glow */}
                                    <div className="absolute left-[-4px] top-1/4 bottom-1/4 w-[8px] bg-[#FBBC05] blur-xl opacity-80" />
                                </div>

                                {/* 2. Pure Inline CSS Border Layer (Fixes the linter error completely) */}
                                <div
                                    className="absolute inset-0 rounded-lg p-[1px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)',
                                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        WebkitMaskComposite: 'xor',
                                        maskComposite: 'exclude',
                                    }}
                                />

                                {/* SVG and Text Content */}
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                                </svg>

                                <span>Google</span>
                            </a>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
import { useState, useRef, useEffect, createRef } from "react";
import FormInput from "./FormInput";
import Button from "../Button";
import isClientReady from "@/lib/isClientReady";

export default function Contact() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");

    let nameRef = createRef<any>();
    let emailRef = createRef<any>();
    let messageRef = useRef<any>();
    let btnRef = useRef<any>();

    function handleName(e: Event) {
        setName((e.target as JSX.IntrinsicElements["input"]).value as string);
        // console.log(name);
    }

    function handleEmail(e: Event) {
        setEmail((e.target as JSX.IntrinsicElements["input"]).value as string);
    }

    function handleMessage(e: Event) {
        setMessage((e.target as JSX.IntrinsicElements["textarea"]).value as string);
    }

    if (isClientReady())
        useEffect(() => {
            nameRef.current?.addEventListener("change", handleName);
            emailRef.current?.addEventListener("change", handleEmail);
            messageRef.current?.addEventListener("change", handleMessage);

            return () => {
                nameRef.current?.removeEventListener("change", handleName);
                emailRef.current?.removeEventListener("change", handleEmail);
                messageRef.current?.removeEventListener("change", handleMessage);
            };
        }, []);

    function handleSubmit(e: any) {
        window.open(`https://mailto:mangadirpl@gmail.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(name)}`);
        // window.open(`https://mailto:mangadirpl@gmail.com`);
        e.preventDefault();
    }

    return (
        <div className="form">
            <h2 className="text-2xl flex flex-col justify-start items-center font-normal text-primary-300 text-center">Wan't to know more about me?</h2>
            <form onSubmit={handleSubmit} className="flex mt-4 flex-col items-center justify-start max-w-[40rem] mx-auto gap-4 p-2">
                <div className="form__group flex gap-4 w-full">
                    <FormInput required ref={nameRef} type="text" name="subject" placeholder="Your Name" defaultValue={name} />
                    <FormInput required ref={emailRef} errorMessage="Your email is invalid" type="email" name="email" placeholder="Your Email" defaultValue={email} />
                </div>
                <textarea required ref={messageRef} defaultValue={message} name="body" cols={30} rows={10} placeholder="Your Message" className="w-full px-3 py-2 border-2 border-neutral-300 transition-all duration-100 focus:border-primary-400 outline-none text-neutral-600  [&:not(:placeholder-shown):invalid]:border-red-500"></textarea>
                <Button ref={btnRef} className="ml-auto text-xl rounded-sm bg-primary-300 text-white hover:bg-primary-200 hover:scale-[.98]">
                    Send Message
                </Button>
            </form>
        </div>
    );
}

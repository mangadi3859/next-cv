import { useState, useRef, useEffect, createRef } from "react";
import FormInput from "./FormInput";
import Button from "../Button";
import isClientReady from "@/lib/isClientReady";
import { CircleOne } from "../Circle";

export default function Contact() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");

    let nameRef = createRef<any>();
    let emailRef = createRef<any>();
    let messageRef = useRef<any>();
    let btnRef = useRef<any>();
    let resultMsgRef = useRef<any>();

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
        let endpoint = "https://formsubmit.co/" + encodeURIComponent("mangadirpl+cv-next@gmail.com");
        btnRef.current.disabled = true;

        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        })
            .then((e) => {
                resultMsgRef.current.innerText = "Success";
                resultMsgRef.current.classList.add("text-green-700");
                resultMsgRef.current.classList.add("border-green-600");
                resultMsgRef.current.classList.add("bg-green-300");
                resultMsgRef.current.classList.remove("border-red-600");
                resultMsgRef.current.classList.remove("bg-red-300");
                resultMsgRef.current.classList.remove("text-black");
            })
            .catch((err) => {
                resultMsgRef.current.innerText = "Submit Failed";
                resultMsgRef.current.classList.add("border-red-600");
                resultMsgRef.current.classList.add("bg-red-300");
                resultMsgRef.current.classList.add("text-black");
                console.log(err);
            })
            .finally(() => {
                btnRef.current.disabled = false;
                resultMsgRef.current.classList.add("block");
                resultMsgRef.current.classList.remove("hidden");

                setTimeout(() => {
                    resultMsgRef.current.classList.remove("block");
                    resultMsgRef.current.classList.add("hidden");
                }, 10000);
            });

        e.preventDefault();
    }

    return (
        <div className="form relative isolate">
            <CircleOne />

            <h2 className="text-2xl flex flex-col justify-start items-center font-normal text-primary-300 text-center">Wan't to know more about me?</h2>
            <form onSubmit={handleSubmit} className="flex mt-4 flex-col items-center justify-start max-w-[40rem] mx-auto gap-4 p-2">
                <div className="form__group flex phone:flex-col gap-4 w-full">
                    <FormInput required ref={nameRef} type="text" name="subject" placeholder="Your Name" defaultValue={name} />
                    <FormInput required ref={emailRef} errormessage="Your email is invalid" type="email" name="email" placeholder="Your Email" defaultValue={email} />
                </div>
                <textarea required ref={messageRef} defaultValue={message} name="body" cols={30} rows={5} placeholder="Your Message" className="w-full px-3 py-2 border-2 border-neutral-300 transition-all duration-100 focus:border-primary-400 outline-none text-neutral-600  [&:not(:placeholder-shown):invalid]:border-red-500"></textarea>
                <Button ref={btnRef} className="ml-auto disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-sm bg-primary-300 text-white hover:bg-primary-200 hover:scale-[.98]">
                    Send Message
                </Button>

                <p ref={resultMsgRef} className="bg-green-100 hidden mt-4 rounded-md border-[1px] border-green-500 px-6  py-2 text-sm font-light"></p>
            </form>
        </div>
    );
}

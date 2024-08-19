"use client";
import styles from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Swal from "sweetalert2";
//import handleSubmitFireBase from "../../FireBase/Handles/HandleSubmit";
import imgComment from "../../assets/Home/message-2-line.svg";
import imgMail from "../../assets/Contact/mail-send-line.svg";
//import imgWhats from "../../assets/Contact/whatsapp-line.svg";
import imgLinkedin from "../../assets/Home/linkedin-box-fill.svg";
import imgArrow from "../../assets/Contact/arrow-right-line.svg";
import Image from "next/image";
import infoform from "@/types";

export default function Contact() {
  const cardsInfo = [
    {
      icon: imgMail,
      network: "Email",
      info: "tobiastymkiw@gmail.com",
      direction: "mailto:tobiastymkiw@gmail.com",
    },
    /* {
      icon: imgWhats,
      network: "WhatsApp",
      info: "",
      direction:
        "https://api.whatsapp.com/send?phone=&text=Hello,%20I%20wanna%20know%20you%20more!!",
    }, */
    {
      icon: imgLinkedin,
      network: "Linkedin",
      info: "Tobias Tymkiw",
      direction: "https://www.linkedin.com/in/tobias-tymkiw",
    },
  ];
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { firstName: "", email: "", message: "" } });

  /* const onSubmit = (data: infoform) => {
    handleSubmitFireBase(data);
  }; */
  const onSubmit = async (data: infoform) => {
    //handleSubmitEmail(data);
    console.log(data);
    const response = await fetch("/api/nodemailer", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());
    response.ok
      ? Swal.fire({
          icon: "success",
          title: "Good job!",
          text: "The message has been sent successfully!",
          background: "#131111",
          timer: 1800,
          confirmButtonColor: "rgb(65, 24, 24)",
          allowOutsideClick: false,
          showConfirmButton: false,
        })
      : Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          background: "#131111",
          //timer: 1800,
          confirmButtonColor: "rgb(65, 24, 24)",
          allowOutsideClick: false,
          //showConfirmButton: false,
        });
    console.log(response);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <section id="contactSection" className={styles.contact}>
      <div className={styles.container}>
        <h2>Get in touch</h2>
        <p>Contact me</p>
        <div className={styles.container0}>
          <div className={styles.cardsContainer}>
            {cardsInfo.map((card) => (
              <div className={styles.card} key={card.info}>
                <Image src={card.icon} alt={card.network} />
                <h2>{card.network}</h2>
                <small>{card.info}</small>
                <a
                  href={card.direction}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Write me
                  <Image src={imgArrow} alt="right-arrow" />
                </a>
              </div>
            ))}
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.casillero}>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Insert your name..."
                  {...register("firstName", {
                    required: true,
                    pattern: /^[A-Za-z\s]+$/i,
                    maxLength: 15,
                    minLength: 3,
                  })}
                />
                {errors.firstName?.type === "required" && (
                  <p className={styles.error}>This field is required</p>
                )}
                {errors.firstName?.type === "pattern" && (
                  <p className={styles.error}>The format is incorrect</p>
                )}
                {errors.firstName?.type === "maxLength" && (
                  <p className={styles.error}>The name is too long</p>
                )}
                {errors.firstName?.type === "minLength" && (
                  <p className={styles.error}>The name is too short</p>
                )}
              </div>

              <div className={styles.casillero}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Insert your email..."
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p className={styles.error}>This field is required</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className={styles.error}>The email format is incorrect</p>
                )}
              </div>
              <div className={styles.casillero}>
                <label>Massage</label>
                <div className={styles.divTextArea}>
                  <textarea
                    placeholder="Insert your message..."
                    {...register("message", {
                      required: true,
                      minLength: 10,
                    })}
                  ></textarea>
                </div>
                {errors.message?.type === "required" && (
                  <p className={styles.error}>This field is required</p>
                )}
                {errors.message?.type === "minLength" && (
                  <p className={styles.error}>The message is to short</p>
                )}
              </div>
              <button type="submit" className={styles.btn}>
                Send Massage
                <Image src={imgComment} alt="Icon-Message" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

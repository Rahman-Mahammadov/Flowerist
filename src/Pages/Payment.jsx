import { useNavigate } from "react-router-dom";
import styles from "../Pages/payment.module.scss";
import { Button } from "../Components";
import success from "../assets/images/success.jpg"

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={success} alt="" />
        </div>
        <h2 className={styles.heading}>Your payment is successful</h2>
        <p className={styles.paymentInfo}>
          Your order will be proceeded in 30 mins. If you have any problem,
          please contact the customer service. Detail information will be
          included below.
        </p>

        <div className="flex justify-center mt-10"
          onClick={() => {
            navigate("/");
          }}
        >
          
          <Button
            color={"text-white"}
            bg={"bg-primary"}
            label={"Back to homepage"}
            px={"px-8"}
            py={"py-2.5"}
            font={"text-xl"}
          />
        </div>
      </div>
    </>
  );
};

import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { APIWITHTOKEN } from "../../http";

const VerifyKhaltipidx = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const pidx = searchParams.get("pidx");

  useEffect(() => {
    const verify = async () => {
      if (!pidx) return;

      try {
        const response = await APIWITHTOKEN.post("/order/verify-order", {
          pidx,
        });

        if (response.status === 200) {
          alert("Payment verified successfully");
          navigate("/my-orders");
        }
      } catch (error) {
        console.log(error);
      }
    };

    verify();
  }, [pidx]);

  return <h2>Verifying your payment...</h2>;
};

export default VerifyKhaltipidx;
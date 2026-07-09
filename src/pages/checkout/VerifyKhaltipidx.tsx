import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { APIWITHTOKEN } from "../../http";
import { useAppDispatch } from "../../store/hook";
import { fetchMyOrders } from "../../store/checkoutSlice";

const VerifyKhaltipidx = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
 const dispatch=useAppDispatch();
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
          await dispatch(fetchMyOrders());
          navigate("/my-orders")
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
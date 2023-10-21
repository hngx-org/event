import SuccessPage from "@/components/successPage";
import Header from "@/components/web/header";
import Authentication from "@/provider/authentication";

export default function ResetPassWordSuccesful() {
  return (
    <Authentication>
      <div>
        <div className="lg:hidden">
          <Header />
        </div>
        <SuccessPage
          route="auth/login"
          title="Reset password successful"
          text="Your password has been successfully reset. Click below to log in."
          button="Back to Login"
        />
      </div>
    </Authentication>
  );
}

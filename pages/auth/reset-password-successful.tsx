import SuccessPage from "@/components/successPage"

export default function ResetPassWordSuccesful() {
  return (
    <SuccessPage
      route="login"
      title="Reset password successful" 
      text="Your password has been successfully reset. Click below to log in."
      button="Back to Login" 
    />
  )
}
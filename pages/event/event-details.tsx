import EventHeader from "@/components/eventHeader";
import EventDetails from "@/components/events/EventDetails";
import Footer from "@/components/web/footer";
import AuthProvider from "@/provider/authProvider";
import {useRouter} from "next/router";

export default function EventDetailsPage() {
  const router = useRouter();
  const {id} = router.query;

  // Ensure id is a string, and if it's an array, choose the first element
  const eventId = Array.isArray(id) ? id[0] : id;

  if (typeof eventId === "string") {
    return (
      <AuthProvider>
        <EventHeader />
        <EventDetails eventId={eventId} />
        <Footer />
      </AuthProvider>
    );
  } else {
    // Handle the case where eventId is not a valid string
    return (
      <AuthProvider>
        <div>Invalid event ID</div>
      </AuthProvider>
    );
  }
}

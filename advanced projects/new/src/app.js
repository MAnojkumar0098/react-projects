import Phasor from "./components/Phasor";
import Info from "./components/info";

function App() {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications");
      return;
    }

    // Request permission for notifications
    Notification.requestPermission().then(function (permission) {
      // If permission is granted, show the notification
      if (permission === "granted") {
        var notification = new Notification("Hello, World!", {
          body: "Hello, notification!",
        });
      } else if (permission === "denied") {
        // Notify the user that they denied permission
        alert("You have denied permission for notifications");
      }
    });

  return (
    <>
      <Phasor />
      <Info />
    </>
  );
}

export default App;

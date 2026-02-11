import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Videocall = () => {
  const roomID = "room1";
  const userID = String(Math.floor(Math.random() * 10000));
  const userName = "User_" + userID;

  const appID = 450692693; // YOUR APP ID
  const serverSecret = "6410f10c9a9aa56e5bcf0d6d973c20db";

  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    userID,
    userName
  );
  <h1>helloooo</h1>

  const myMeeting = async (element) => {
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      turnOnCameraWhenJoining: true,
      turnOnMicrophoneWhenJoining: true,
      showScreenSharingButton: true,
    });
  };

  return <div ref={myMeeting} style={{ width: "100vw", height: "100vh" }} />;
};

export default Videocall;
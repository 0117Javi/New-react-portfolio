// import { GoMail } from "react-icons/fa";
// import { FiPhoneOff } from "react-icons/fa";
// import { GrLinkedin } from "react-icons/fa";
// import { RiGithubLine } from "react-icons/fa";

const handleURL = (url) => {
  return () => window.open(url, "_blank");
};

const Contacts = () => {
  return (
    <div>
      {/* <FiPhoneOff size="30px" style={{ padding: "1%" }} onClick={handleURL} />

      <GoMail size="30px" style={{ padding: "1%" }} onClick={handleURL} />
      <RiGithubLine
        size="30px"
        style={{ padding: "1%" }}
        onClick={handleURL("http://www.github.com/0117Javi")}
      />
      <GrLinkedin
        size="30px"
        style={{ padding: "1%" }}
        onClick={handleURL(
          "http://www.linkedin.com/in/j-j-espinoza-gomez-177081187"
        )}
      /> */}
      <a href="http://www.github.com/0117Javi">Github</a>
    </div>
  );
};

export default Contacts;

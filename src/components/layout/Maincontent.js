import "./Maincontent.css";
import videoSrc from '../Files/ux-showcase.mp4';
const Maincontent = ({ children }) => {
  return (
    <main className="main-content">
      {/* Background video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="content-container">{children}</div>
    </main>
  );
};

export default Maincontent;

import { Link } from "react-router-dom";

import Button from "./Button";

import "./styles/Landing.scss";
import candy from "../images/candy.png";
import snack from "../images/snack.png";
import chips from "../images/crisps.png";
import snack2 from "../images/snack2.png";

export default function Landing() {

  return (
    <section className="landing-background layout">
      <div className="landing-layout">
        <div className="coiny">
          <h1>SNAZZY SNACKS</h1>
        </div>
        <div>
          <h3>Upgrade your snacking game with pizazz-packed treats.<br />Every month at your doorstep!</h3>
        </div>
        <div>
          <h5>*starting at 20$/mo</h5>
        </div>
        <div>
          <Link to="/login">
            <Button>GET SNACKING!</Button>
          </Link>
        </div>
        <img className="landing-candy" src={candy} alt="Candy" />
        <img className="landing-snack" src={snack} alt="Snack" />
        <img className="landing-chip" src={chips} alt="Chips" />
        <img className="landing-bar" src={snack2} alt="Snack" />
      </div>
    </section>
  );
}
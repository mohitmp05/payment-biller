import React from "react";
import airtel from "../Images/airtel.png";
import jio from "../Images/jio.png";
import vi from "../Images/vi.png";
import adani from "../Images/adani.png";
import tata from "../Images/tata.png";
import BillerCard from "./billerCard";

export default function MasterBiller() {
  return (
    <div className="ui card">
      <BillerCard name="Airtel" image={airtel} />
      <BillerCard name="Jio" image={jio} />
      <BillerCard name="Vi" image={vi} />
      <BillerCard name="Adani Electricity" image={adani} />
      <BillerCard name="Tata Electricity" image={tata} />
    </div>
  );
}

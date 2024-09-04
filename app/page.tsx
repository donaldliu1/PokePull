import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="left-panel">
        <div className="top-left-panel">
            <div className="orb-container">
                <div className="orb">
                    <div className="inner-circle">
                        <div className="small-circle"></div>
                    </div>
                </div>
            </div>
        <div className="gradient-bar">
            <div className="segment segment-1"></div>
            <div className="segment segment-2"></div>
            <div className="segment segment-3"></div>
            <div className="segment segment-4"></div>
            <div className="segment segment-5"></div>
        </div>
    </div>
        <div id="cards-container"></div>
    </div>
    <div className="right-panel">
        <div className="top-right-panel">
        <h1>PokéPulls</h1>
    </div>
        <div className="text-layout">
        <p id="name">Name:</p>
        <p id="rarity">Rarity:</p>
        <p id="value">Value:</p>
    </div>
    <div className="button-layout">
        <button id="pull-button">PULL</button>
        <button id="inventory-button">Invetory</button>
    </div>
    </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { tip_types } from "../../utils/dataUtils";
import "./styles/mobileNavbar.css";

function FootballLeagueNavbar(props) {
    const [leagueActive, setLeagueActive] = useState(0);
    const [selected, setSelected] = useState(0);
    const leagues_list = useSelector((state) => state.mobileSportsReducers.getTopLeague);
    const leagueActiveFunc = (index, leagueName) => {
        setLeagueActive(index);
        props.leagueName(leagueName);
    };
    const tipTypes = (index) => {
        setSelected(index);
        props.tipTypes(index);
    };
    useEffect(() => {
        props.parentCallback(selected);
    }, [props]);
    return (
        <div className="league-navbar fixed-top">
            <div className="d-flex">
                {leagues_list && leagues_list.result ? (
                    leagues_list.result.map((item, index) => (
                        <div
                            className={
                                leagueActive === index
                                    ? "leagues league-active ml-2 mr-2"
                                    : "leagues ml-2 mr-2"
                            }
                            key={index}
                            onClick={() =>
                                leagueActiveFunc(index, item.leagueName)
                            }
                        >
                            {item.imageName ? (
                                <img
                                    src={
                                        "assets/images/micons/" +
                                        item.imageName +
                                        ".png"
                                    }
                                    alt={item.leagueName}
                                />
                            ) : (
                                <></>
                            )}
                            <p className={!item.imageName ? "font" : ""}>
                                {item.displayName}
                            </p>
                        </div>
                    ))
                ) : (
                    <></>
                )}
            </div>
            <div className="tip-types ">
                <div className="d-flex">
                    {tip_types.map((item, i) => (
                        <div className="tip-type px-1" key={i}>
                            <p
                                onClick={() => tipTypes(i)}
                                className={selected === i ? "selected" : ""}
                            >
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default FootballLeagueNavbar;

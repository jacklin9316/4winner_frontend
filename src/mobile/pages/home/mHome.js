import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { MobileNavbar, SubMobileNavbar, MobileFooter, LeagueContent } from '../../../mobile/components'
import ToastService from '../../../service/toast.service';
import './mHome.css'
const tipTypesList = [
    [1, 'X', 2],
    [1, 'X', 2],
    ['Over', 'Under'],
    [1, 'X', 2],
    [1, 'X', 2],
    ['1X', 12, 'X2'],
    ['Yes', 'No'],
]
const leagueContentData = [
    {
        title: 'Football/Argentina/Torneo Regional Federal',
        leagues: [
            {
                content_Id: '1',
                teamName1: 'La Emilia',
                teamName2: 'Regatas San Nicol.',
                score1: 1,
                score2: 2,
                status: 3,
                redCard1: 0,
                redCard2: 2,
                odds: [1.5, 1.2, 2.3]
            },
            {
                content_Id: '2',
                teamName1: 'Paris SG',
                teamName2: 'Arsenal F.C.',
                score1: 0,
                score2: 0,
                status: 2,
                redCard1: 0,
                redCard2: 0,
                odds: [3.40, 1.70, 4.50]
            },
        ]
    },
    {
        title: 'Football/Mexico/Liga Expansion MX Apertura',
        leagues: [
            {
                content_Id: '3',
                teamName1: 'FC Barcelona',
                teamName2: 'Real Madrid',
                score1: 0,
                score2: 0,
                status: 0,
                redCard1: 0,
                redCard2: 0,
                odds: [15.00, 1.00, 2.90]
            },
            {
                content_Id: '4',
                teamName1: 'Cimarrones Sonora',
                teamName2: 'Club Celaya FC',
                score1: 0,
                score2: 0,
                status: 1,
                redCard1: 0,
                redCard2: 0,
                odds: [15.00, 1.00, 23.00]
            },
            {
                content_Id: '5',
                teamName1: 'Cimarrones Sonora',
                teamName2: 'Club Celaya FC',
                score1: 0,
                score2: 0,
                status: 1,
                redCard1: 0,
                redCard2: 0,
                odds: [8.80, 1.00, 15.00]
            },
            {
                content_Id: '6',
                teamName1: 'Cimarrones Sonora',
                teamName2: 'Club Celaya FC',
                score1: 0,
                score2: 0,
                status: 1,
                redCard1: 0,
                redCard2: 0,
                odds: [2.70, 1.60, 8.00]
            },
            {
                content_Id: '7',
                teamName1: 'Cimarrones Sonora',
                teamName2: 'Club Celaya FC',
                score1: 0,
                score2: 0,
                status: 1,
                redCard1: 0,
                redCard2: 0,
                odds: [5.60, 2.50, 2.60]
            },
            {
                content_Id: '8',
                teamName1: 'Cimarrones Sonora',
                teamName2: 'Club Celaya FC',
                score1: 0,
                score2: 0,
                status: 1,
                redCard1: 0,
                redCard2: 0,
                odds: [14.00, 7.50, 6.40]
            },
        ]
    }
]
function MHome() {
    const [tipTypes, setTipTypes] = useState();
    const [betCollectorHome, setBetCollectorHome] = useState([]);
    const userData = useSelector(state => state.authReducers)
    const getTipTypes = (data) => {
        setTipTypes(data);
    }
    useEffect(() => {
        console.log('hello');
    }, [betCollectorHome])
    // const betCollectListFunc = (betCollectList, obj) => {
    //     let tempBetCollectList = [];
    //     tempBetCollectList = betCollectList;
    //     if (tempBetCollectList && tempBetCollectList.length > 0) {
    //         let flag = false;
    //         tempBetCollectList.forEach((item, index) => {
    //             if (item.matchId === obj.matchId) {
    //                 item.odds.includes(...obj.odds) ? arrayRemove(item.odds, item.odds.indexOf(...obj.odds)) : item.odds.push(...obj.odds);
    //                 return flag = true;
    //             }
    //         });
    //         if (flag === false) {
    //             tempBetCollectList.push(obj)
    //         }
    //     }
    //     else {
    //         tempBetCollectList.push(obj)
    //     }
    //     console.log('betCollectListFunc', tempBetCollectList);
    //     setBetCollectorHome(tempBetCollectList);
    // }
    return (
        <>
            <MobileNavbar />
            <SubMobileNavbar parentCallback={getTipTypes} />
            <div className='m_content'>
                <div className='m_header'>
                    <div className='odds'>
                        {tipTypes !== undefined ? tipTypesList[tipTypes].map((item, index) => <p key={index}>{item}</p>) : <></>}
                    </div>
                </div>
                <div className='m_body'>
                    {leagueContentData && leagueContentData.map((leaguesData, index) =>
                        <div key={index}>
                            <div key={index} className="league-content">{leaguesData.title}</div>
                            {leaguesData.leagues.map((leagues, i) =>
                                <LeagueContent
                                    key={i}
                                    // selected={betCollectListFunc}
                                    content_Id={leagues.content_Id}
                                    teamName1={leagues.teamName1}
                                    teamName2={leagues.teamName2}
                                    score1={leagues.score1}
                                    score2={leagues.score2}
                                    status={leagues.status}
                                    redCard1={leagues.redCard1}
                                    redCard2={leagues.redCard2}
                                    odds={leagues.odds}
                                    // betCollectorHome={betCollectorHome}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
            <MobileFooter />
        </>
    );
};
export default MHome;
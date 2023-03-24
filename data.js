const fs = require('fs');
const path = require('path');



const dataBinding = {

    "svg": {
        "logo": "https://res.cloudinary.com/dolpotacg/image/upload/v1675753663/samples/LS_images/logo_odzghs.svg",
        "diaIcon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754621/images/dia-icon_rwn4ww.svg",
        "heartIcon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754622/images/heart-icon_aclenp.svg",
        "largeBpIcon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754623/images/large-heart-icon_htqwql.svg",
        "largeHeartIcon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754623/images/large-heart-icon_htqwql.svg",
        "largeLungIcon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754624/images/large-lung-icon_sst0op.svg",
        "largeSpo2Icon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754625/images/large-spo2-icon_ettnso.svg",
        "largeTemperatureIcon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754625/images/large-temperature-icon_ziwe5f.svg",
        "lungIcon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754625/images/lung-icon_lawjuz.svg",
        "postureIcon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754626/images/posture-icon_lfxvfd.svg",
        "postureIcon1": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754626/images/posture-icon1_q0odrz.svg",
        "postureIcon2": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754626/images/posture-icon2_l23pay.svg",
        "postureIcon3": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754627/images/posture-icon3_clo32l.svg",
        "postureIcon4": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754627/images/posture-icon4_iwuh64.svg",
        "postureIcon5": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754628/images/posture-icon5_kypqmw.svg",
        "postureIcon6": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754628/images/posture-icon6_swwbkz.svg",
        "postureIcon7": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754628/images/posture-icon7_jsr7ez.svg",
        "postureIcon8": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754628/images/posture-icon8_kyvmti.svg",
        "spo2Icon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754629/images/spo2-icon_qharrt.svg",
        "sysIcon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754629/images/sys-icon_rz3ek4.svg",
        "temperatureIcon": "https://res.cloudinary.com/dlvgerrwj/image/upload/v1672754629/images/temperature-icon_vtf57c.svg"
    },

    "patient": {
        "Personal-Info": {
            "Name": "Jane Doe",
            "MRN": "01234567890",
            "dob": "12/Jan/1988",
            "sex": "Female",
            "Address": "Ward, Bed"
        },
        "Hostpital-Info": {
            "Addmitted": "12/Jan/2022 13:20",
            "Discharged": "13/Jan/2022 13:20",
            "Report": {
                "from-date": "12/Jan/2022 12:00",
                "to-date": "12/Jan/2022 18:00",
                "printed": "13/Jan/2022 18:15"
            }
        },

        "arrhythmia-events-summary": {
            "PieValue": {
                "title": "string",
                "data-type": "percentage",
                "data": [
                    {
                        "value": 23.3,
                        "label": "Ventricular",
                        "color": "#6ed9f7"
                    },
                    {
                        "value": 26.7,
                        "label": "Artifact",
                        "color": "#37d4ff"
                    },
                    {
                        "value": 13.3,
                        "label": "Block & Pause",
                        "color": "#00aad9"
                    },
                    {
                        "value": 16.7,
                        "label": "None",
                        "color": "#80c685"
                    },
                    {
                        "value": 20,
                        "label": "Atrial",
                        "color": "#00BBEF"
                    },
                ]
            },

            "arrhythmia-events-leftside-heading": [
                {
                    "title": "Atrial",
                    "count": "444",
                    "completion": "(20%)",
                    "name": "beats"
                }
            ],
            "arrhythmia-events-leftside-down-heading": [
                {
                    "title": "Sinus",
                    "count": "6444",
                    "completion": "(16.7%)",
                    "name": "beats"
                }
            ],

            "arrhythmia-events-leftside": [
                {
                    "event": "Multifocal Atrial Tachycardia",
                    "duration": "1 m 20 s",
                    "beats": "150 (0.08%)"
                },
                {
                    "event": "Atrial Couplet",
                    "duration": "1 m 15 s",
                    "beats": "120 (0.05%)"
                },
                {
                    "event": "Atrial Triplet",
                    "duration": "21 s",
                    "beats": "40 (0.08%)"
                },
                {
                    "event": "Atrial Ectopic",
                    "duration": "40 s",
                    "beats": "50 (0.02%)"
                },
                {
                    "event": "Atrial Bigeminy",
                    "duration": "10 s",
                    "beats": "16 (0.01%)"
                }
            ],

            "arrhythmia-events-leftside-down": [
                {
                    "event": "Bradycardia",
                    "duration": "1m 20 s",
                    "beats": "150 (0.08%)"
                },
                {
                    "event": "Tachycardia",
                    "duration": "1m 15 s",
                    "beats": "120 (0.05%)"
                }
            ],


            "arrhythmia-events-rightside-heading": [
                {
                    "title": "Ventricular",
                    "count": "444",
                    "completion": "(23.5%)",
                    "name": "beats"
                }
            ],

            "arrhythmia-events-rightside-down-heading": [
                {
                    "title": "Block & Pause",
                    "count": "3444",
                    "completion": "(16.7%)",
                    "name": "beats"
                }
            ],

            "arrhythmia-events-rightside": [
                {
                    "event": "Ventricular Flutter",
                    "duration": "1 m 20 s",
                    "beats": "150 (0.08%)"
                },
                {
                    "event": "Ventricular Flutter",
                    "duration": "1 m 15 s",
                    "beats": "120 (0.05%)"
                },

                {
                    "event": "Ventricular Triplet",
                    "duration": "21 s",
                    "beats": "40 (0.01%)"
                }
            ],
            "arrhythmia-events-rightside-down": [
                {
                    "event": "2nd Deg Block",
                    "duration": "1 m 20 s",
                    "beats": "150 (0.08%)"
                },

                {
                    "event": "Sinus Pause",
                    "duration": "1 m 15 s",
                    "beats": "120 (0.05%)"
                }
            ],
        },

        "AF": {
            "AF-Data": [
                {
                    "name": "Alerts",
                    "value": "3",
                },
                {
                    "name": "HR Range",
                    "value": "80-82 bpm",
                },

                {
                    "name": "Longest Duration",
                    "value": "13 sec",
                },

                {
                    "name": "AF Burden",
                    "value": "0.05 % (28.9 sec)"
                }
            ]
        },

        "SVT": {
            "SVT-Data": [
                {
                    "name": "Alerts",
                    "value": "3",
                },
                {
                    "name": "HR Range",
                    "value": "80-82 bpm",
                },

                {
                    "name": "Longest Duration",
                    "value": "13 beats/4.0 sec at 19:01 2/AUG"
                }
            ]
        },
    
        "AV-Block": {
            "AV-Block-Data": [
                {
                    "name": "Alerts",
                    "value": "3",
                },

                {
                    "name": "Mob 1;",
                    "value": "No",
                },
                {
                    "name": "2:1:",
                    "value": "Yes",
                },

                {
                    "name": ">2:1:",
                    "value": "No",
                },
                {
                    "name": "CHB",
                    "value": "No",
                },
                {
                    "name": "NonConducted beats",
                    "value": "No",
                },
                {
                    "name": "Slowest HR",
                    "value": "80 - 82 bpm"
                }
            ],
        },

        "Pauses": {
            "Pauses-data": [
                {
                    "name": "Alerts",
                    "value": 3,
                },
                {
                    "name": "Max per hr",
                    "value": 3
                }
            ]
        },

        "VT3-beats-or-more": {
            "VT-data": [
                {
                    "name": "Alerts",
                    "value": 3,
                },
                {
                    "name": "Avg HR",
                    "value": "160 bpm",
                },

                {
                    "name": "HR range",
                    "value": "80 - 82 bpm",
                },
                {
                    "name": "Longest",
                    "value": "13 beats/ 4.0 sec at 19:01 2/AUG"
                }
            ],
        },
        "trendmmHg-data": {
            "columns": [
                {
                    "value": 75,
                    "value1": 60,
                    "time": "12:00"
                },
                {
                    "value": 40,
                    "value1": 70,
                    "time": "12:15"
                },
                {
                    "value": 90,
                    "value1": 40,
                    "time": "12:30"
                },
                {
                    "value": 80,
                    "value1": 75,
                    "time": "12:45"
                },
                {
                    "value": 105,
                    "value1": 65,
                    "time": "13:00"
                },
                {
                    "value": 10,
                    "value1": 50,
                    "time": "13:15"
                },
                {
                    "value": 120,
                    "value1": 90,
                    "time": "13:30"
                }
            ],
            "axis-y": {
                "max": 120,
                "values": [40, 80, 120]
            }
        },
        "ArrhythmiaAlertsSummary": {
            "clinical-data": {
                "columns": [
                    {
                        "value": 200,
                        "time": "12:00"
                    },
                    {
                        "value": 200,
                        "time": "12:15"
                    },
                    {
                        "value": 200,
                        "time": "12:30"
                    },
                    {
                        "value": 200,
                        "time": "12:45"
                    },
                    {
                        "value": 200,
                        "time": "13:00"
                    },
                    {
                        "value": 200,
                        "time": "13:15"
                    },
                    {
                        "value": 200,
                        "time": "13:30"
                    }
                ],
                "area-regions": [
                    {
                        "start": "12:00",
                        "end": "12:40"
                    },
                    {
                        "start": "13:00",
                        "end": "13:10"
                    }
                ],
                "axis-y": {
                    "max": 199
                },
            },
            "ArrhythmiaAlertsHeading":
                [
                    { "name": "Atrial", "value": 111 },
                    { "name": "Ventricular", "value": 101 },
                    { "name": "Sinus", "value": 90 },
                    { "name": "Block & Pause", "value": 90 }
                ],

            "ArrhythmiaTable": [
                {
                    "alertTime": "13:15",
                    "alertDate": "12/jan/2022",
                    "type": "Atrial Couplet",
                    "Priority": "High",
                    "AcknowledgeBy": "by Dinesh Kumar",
                    "AcknowledgeTime": "12:15",
                    "AcknowledgeDate": "13/jan/2022",
                    "ActionTakers": "Lorem Ipsum"
                },
                {
                    "alertTime": "14:00",
                    "alertDate": "13/jan/2022",
                    "type": "Atrial Couplet",
                    "Priority": "Med",
                    "AcknowledgeBy": "by Dinesh Kumar",
                    "AcknowledgeTime": "16:15",
                    "AcknowledgeDate": "14/jan/2022",
                    "ActionTakers": "Lorem Ipsum"
                },
                {
                    "alertTime": "15:00",
                    "alertDate": "14/jan/2022",
                    "type": "Atrial Couplet",
                    "Priority": "High",
                    "AcknowledgeBy": "by Dinesh Kumar",
                    "AcknowledgeTime": "12:15",
                    "AcknowledgeDate": "15/jan/2022",
                    "ActionTakers": "Lorem Ipsum"
                },
                {
                    "alertTime": "16:00",
                    "alertDate": "15/jan/2022",
                    "type": "Ventricular flutter",
                    "Priority": "Low",
                    "AcknowledgeBy": "by Dinesh Kumar",
                    "AcknowledgeTime": "15:15",
                    "AcknowledgeDate": "16/jan/2022",
                    "ActionTakers": "Lorem Ipsum"
                },
                {
                    "alertTime": "17:00",
                    "alertDate": "16/jan/2022",
                    "type": "Ventricular Triplet",
                    "Priority": "Med",
                    "AcknowledgeBy": "by Dinesh Kumar",
                    "AcknowledgeTime": "14:15",
                    "AcknowledgeDate": "17/jan/2022",
                    "ActionTakers": "Lorem Ipsum"
                },
                {
                    "alertTime": "18:00",
                    "alertDate": "17/jan/2022",
                    "type": "Bradycardia",
                    "Priority": "High",
                    "AcknowledgeBy": "by Dinesh Kumar",
                    "AcknowledgeTime": "13:15",
                    "AcknowledgeDate": "18/jan/2022",
                    "ActionTakers": "Lorem Ipsum"
                }
            ]

        },
    },
};

module.exports.dataBinding = dataBinding;
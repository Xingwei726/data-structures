{"filter":false,"title":"week03_Geocode.js","tooltip":"/week3/week03_Geocode.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":51,"column":12},"end":{"row":51,"column":16},"action":"remove","lines":["    "],"id":181}],[{"start":{"row":44,"column":12},"end":{"row":44,"column":15},"action":"insert","lines":["// "],"id":182}],[{"start":{"row":49,"column":12},"end":{"row":49,"column":15},"action":"insert","lines":["// "],"id":183}],[{"start":{"row":49,"column":0},"end":{"row":50,"column":0},"action":"remove","lines":["            // var tamuGeo = JSON.parse(body);",""],"id":184}],[{"start":{"row":51,"column":27},"end":{"row":51,"column":38},"action":"remove","lines":["AAaddresses"],"id":185}],[{"start":{"row":51,"column":27},"end":{"row":51,"column":28},"action":"remove","lines":["]"],"id":186},{"start":{"row":51,"column":26},"end":{"row":51,"column":27},"action":"remove","lines":["["]}],[{"start":{"row":20,"column":27},"end":{"row":20,"column":35},"action":"remove","lines":["['city']"],"id":187}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":27},"action":"remove","lines":["afterAddresses"],"id":188},{"start":{"row":20,"column":13},"end":{"row":20,"column":24},"action":"insert","lines":["AAaddresses"]}],[{"start":{"row":54,"column":18},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":189},{"start":{"row":55,"column":0},"end":{"row":55,"column":16},"action":"insert","lines":["                "]},{"start":{"row":55,"column":16},"end":{"row":56,"column":0},"action":"insert","lines":["",""]},{"start":{"row":56,"column":0},"end":{"row":56,"column":16},"action":"insert","lines":["                "]},{"start":{"row":56,"column":16},"end":{"row":57,"column":0},"action":"insert","lines":["",""]},{"start":{"row":57,"column":0},"end":{"row":57,"column":16},"action":"insert","lines":["                "]},{"start":{"row":57,"column":16},"end":{"row":58,"column":0},"action":"insert","lines":["",""]},{"start":{"row":58,"column":0},"end":{"row":58,"column":16},"action":"insert","lines":["                "]},{"start":{"row":58,"column":16},"end":{"row":59,"column":0},"action":"insert","lines":["",""]},{"start":{"row":59,"column":0},"end":{"row":59,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":56,"column":16},"end":{"row":64,"column":44},"action":"insert","lines":["            var timesObj = {","                meetingName: meetingName,","                day: times[0],","                start: times[3] + ' ' + times[4],","                end: times[6] + ' ' + times[7],","                type: times[10]","            };","","            meetingTimesList.push(timesObj);"],"id":190}],[{"start":{"row":56,"column":12},"end":{"row":56,"column":28},"action":"remove","lines":["                "],"id":191},{"start":{"row":56,"column":8},"end":{"row":56,"column":12},"action":"remove","lines":["    "]}],[{"start":{"row":56,"column":8},"end":{"row":56,"column":9},"action":"insert","lines":[" "],"id":192},{"start":{"row":56,"column":9},"end":{"row":56,"column":10},"action":"insert","lines":[" "]},{"start":{"row":56,"column":10},"end":{"row":56,"column":11},"action":"insert","lines":[" "]},{"start":{"row":56,"column":11},"end":{"row":56,"column":12},"action":"insert","lines":[" "]}],[{"start":{"row":54,"column":18},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":193},{"start":{"row":55,"column":0},"end":{"row":55,"column":16},"action":"insert","lines":["                "]},{"start":{"row":55,"column":16},"end":{"row":56,"column":0},"action":"insert","lines":["",""]},{"start":{"row":56,"column":0},"end":{"row":56,"column":16},"action":"insert","lines":["                "]},{"start":{"row":56,"column":16},"end":{"row":57,"column":0},"action":"insert","lines":["",""]},{"start":{"row":57,"column":0},"end":{"row":57,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":56,"column":12},"end":{"row":56,"column":13},"action":"insert","lines":["v"],"id":194},{"start":{"row":56,"column":13},"end":{"row":56,"column":14},"action":"insert","lines":["a"]},{"start":{"row":56,"column":14},"end":{"row":56,"column":15},"action":"insert","lines":["r"]}],[{"start":{"row":56,"column":15},"end":{"row":56,"column":16},"action":"insert","lines":[" "],"id":195},{"start":{"row":56,"column":16},"end":{"row":56,"column":17},"action":"insert","lines":["g"]}],[{"start":{"row":56,"column":17},"end":{"row":56,"column":18},"action":"insert","lines":["e"],"id":196},{"start":{"row":56,"column":18},"end":{"row":56,"column":19},"action":"insert","lines":["o"]},{"start":{"row":56,"column":19},"end":{"row":56,"column":20},"action":"insert","lines":["c"]},{"start":{"row":56,"column":20},"end":{"row":56,"column":21},"action":"insert","lines":["o"]},{"start":{"row":56,"column":21},"end":{"row":56,"column":22},"action":"insert","lines":["d"]},{"start":{"row":56,"column":22},"end":{"row":56,"column":23},"action":"insert","lines":["e"]}],[{"start":{"row":56,"column":23},"end":{"row":56,"column":24},"action":"insert","lines":[" "],"id":197},{"start":{"row":56,"column":24},"end":{"row":56,"column":25},"action":"insert","lines":["="]}],[{"start":{"row":56,"column":24},"end":{"row":56,"column":25},"action":"remove","lines":["="],"id":198}],[{"start":{"row":56,"column":24},"end":{"row":56,"column":25},"action":"insert","lines":["="],"id":199}],[{"start":{"row":56,"column":25},"end":{"row":56,"column":26},"action":"insert","lines":[" "],"id":200},{"start":{"row":56,"column":26},"end":{"row":56,"column":27},"action":"insert","lines":["{"]}],[{"start":{"row":56,"column":27},"end":{"row":58,"column":13},"action":"insert","lines":["","                ","            }"],"id":201}],[{"start":{"row":57,"column":16},"end":{"row":58,"column":0},"action":"insert","lines":["",""],"id":202},{"start":{"row":58,"column":0},"end":{"row":58,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":57,"column":11},"end":{"row":58,"column":34},"action":"insert","lines":["                    latitude: lat,","                    longitude: lon"],"id":203}],[{"start":{"row":57,"column":30},"end":{"row":57,"column":31},"action":"remove","lines":[" "],"id":204},{"start":{"row":57,"column":29},"end":{"row":57,"column":30},"action":"remove","lines":[" "]},{"start":{"row":57,"column":28},"end":{"row":57,"column":29},"action":"remove","lines":[" "]},{"start":{"row":57,"column":24},"end":{"row":57,"column":28},"action":"remove","lines":["    "]},{"start":{"row":57,"column":20},"end":{"row":57,"column":24},"action":"remove","lines":["    "]},{"start":{"row":57,"column":16},"end":{"row":57,"column":20},"action":"remove","lines":["    "]},{"start":{"row":57,"column":12},"end":{"row":57,"column":16},"action":"remove","lines":["    "]}],[{"start":{"row":57,"column":12},"end":{"row":57,"column":13},"action":"insert","lines":[" "],"id":205},{"start":{"row":57,"column":13},"end":{"row":57,"column":14},"action":"insert","lines":[" "]},{"start":{"row":57,"column":14},"end":{"row":57,"column":15},"action":"insert","lines":[" "]},{"start":{"row":57,"column":15},"end":{"row":57,"column":16},"action":"insert","lines":[" "]},{"start":{"row":57,"column":16},"end":{"row":57,"column":17},"action":"insert","lines":[" "]},{"start":{"row":57,"column":17},"end":{"row":57,"column":18},"action":"insert","lines":[" "]},{"start":{"row":57,"column":18},"end":{"row":57,"column":19},"action":"insert","lines":[" "]},{"start":{"row":57,"column":19},"end":{"row":57,"column":20},"action":"insert","lines":[" "]}],[{"start":{"row":56,"column":16},"end":{"row":56,"column":23},"action":"remove","lines":["geocode"],"id":206},{"start":{"row":56,"column":16},"end":{"row":56,"column":17},"action":"insert","lines":["l"]},{"start":{"row":56,"column":17},"end":{"row":56,"column":18},"action":"insert","lines":["a"]},{"start":{"row":56,"column":18},"end":{"row":56,"column":19},"action":"insert","lines":["t"]}],[{"start":{"row":56,"column":16},"end":{"row":56,"column":19},"action":"remove","lines":["lat"],"id":207},{"start":{"row":56,"column":16},"end":{"row":56,"column":23},"action":"insert","lines":["latLong"]}],[{"start":{"row":71,"column":0},"end":{"row":71,"column":44},"action":"remove","lines":["            meetingTimesList.push(timesObj);"],"id":208},{"start":{"row":71,"column":0},"end":{"row":78,"column":38},"action":"insert","lines":["            meetingTimesList.push(timesObj);","","","        }","        thisMeeting.meetings = meetingTimesList;","","        // CALL THE GEOCODE FUNCTION","        meetingList.push(thisMeeting);"]}],[{"start":{"row":60,"column":17},"end":{"row":61,"column":0},"action":"insert","lines":["",""],"id":209},{"start":{"row":61,"column":0},"end":{"row":61,"column":12},"action":"insert","lines":["            "]},{"start":{"row":61,"column":12},"end":{"row":62,"column":0},"action":"insert","lines":["",""]},{"start":{"row":62,"column":0},"end":{"row":62,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":62,"column":12},"end":{"row":62,"column":13},"action":"insert","lines":["t"],"id":210},{"start":{"row":62,"column":13},"end":{"row":62,"column":14},"action":"insert","lines":["h"]},{"start":{"row":62,"column":14},"end":{"row":62,"column":15},"action":"insert","lines":["i"]},{"start":{"row":62,"column":15},"end":{"row":62,"column":16},"action":"insert","lines":["s"]}],[{"start":{"row":62,"column":15},"end":{"row":62,"column":16},"action":"remove","lines":["s"],"id":211},{"start":{"row":62,"column":14},"end":{"row":62,"column":15},"action":"remove","lines":["i"]},{"start":{"row":62,"column":13},"end":{"row":62,"column":14},"action":"remove","lines":["h"]},{"start":{"row":62,"column":12},"end":{"row":62,"column":13},"action":"remove","lines":["t"]}],[{"start":{"row":38,"column":4},"end":{"row":39,"column":0},"action":"insert","lines":["        let meetingTimesList = [];",""],"id":212}],[{"start":{"row":38,"column":8},"end":{"row":38,"column":12},"action":"remove","lines":["    "],"id":213},{"start":{"row":38,"column":4},"end":{"row":38,"column":8},"action":"remove","lines":["    "]}],[{"start":{"row":38,"column":8},"end":{"row":38,"column":24},"action":"remove","lines":["meetingTimesList"],"id":214},{"start":{"row":38,"column":8},"end":{"row":38,"column":9},"action":"insert","lines":["g"]},{"start":{"row":38,"column":9},"end":{"row":38,"column":10},"action":"insert","lines":["e"]},{"start":{"row":38,"column":10},"end":{"row":38,"column":11},"action":"insert","lines":["o"]},{"start":{"row":38,"column":11},"end":{"row":38,"column":12},"action":"insert","lines":["c"]},{"start":{"row":38,"column":12},"end":{"row":38,"column":13},"action":"insert","lines":["o"]},{"start":{"row":38,"column":13},"end":{"row":38,"column":14},"action":"insert","lines":["d"]},{"start":{"row":38,"column":14},"end":{"row":38,"column":15},"action":"insert","lines":["e"]}],[{"start":{"row":74,"column":12},"end":{"row":74,"column":28},"action":"remove","lines":["meetingTimesList"],"id":215},{"start":{"row":74,"column":12},"end":{"row":74,"column":19},"action":"insert","lines":["geocode"]}],[{"start":{"row":74,"column":25},"end":{"row":74,"column":33},"action":"remove","lines":["timesObj"],"id":217},{"start":{"row":74,"column":25},"end":{"row":74,"column":32},"action":"insert","lines":["latLong"]}],[{"start":{"row":78,"column":31},"end":{"row":78,"column":47},"action":"remove","lines":["meetingTimesList"],"id":218},{"start":{"row":78,"column":31},"end":{"row":78,"column":38},"action":"insert","lines":["geocode"]}],[{"start":{"row":78,"column":20},"end":{"row":78,"column":28},"action":"remove","lines":["meetings"],"id":219}],[{"start":{"row":78,"column":20},"end":{"row":78,"column":21},"action":"insert","lines":["a"],"id":220},{"start":{"row":78,"column":21},"end":{"row":78,"column":22},"action":"insert","lines":["a"]}],[{"start":{"row":78,"column":22},"end":{"row":78,"column":23},"action":"insert","lines":["g"],"id":221},{"start":{"row":78,"column":23},"end":{"row":78,"column":24},"action":"insert","lines":["e"]},{"start":{"row":78,"column":24},"end":{"row":78,"column":25},"action":"insert","lines":["o"]},{"start":{"row":78,"column":25},"end":{"row":78,"column":26},"action":"insert","lines":["c"]},{"start":{"row":78,"column":26},"end":{"row":78,"column":27},"action":"insert","lines":["o"]},{"start":{"row":78,"column":27},"end":{"row":78,"column":28},"action":"insert","lines":["d"]},{"start":{"row":78,"column":28},"end":{"row":78,"column":29},"action":"insert","lines":["e"]}],[{"start":{"row":78,"column":20},"end":{"row":78,"column":29},"action":"remove","lines":["aageocode"],"id":222},{"start":{"row":78,"column":20},"end":{"row":78,"column":21},"action":"insert","lines":["g"]},{"start":{"row":78,"column":21},"end":{"row":78,"column":22},"action":"insert","lines":["e"]},{"start":{"row":78,"column":22},"end":{"row":78,"column":23},"action":"insert","lines":["o"]},{"start":{"row":78,"column":23},"end":{"row":78,"column":24},"action":"insert","lines":["c"]},{"start":{"row":78,"column":24},"end":{"row":78,"column":25},"action":"insert","lines":["o"]},{"start":{"row":78,"column":25},"end":{"row":78,"column":26},"action":"insert","lines":["d"]},{"start":{"row":78,"column":26},"end":{"row":78,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":80,"column":0},"end":{"row":81,"column":0},"action":"remove","lines":["        // CALL THE GEOCODE FUNCTION",""],"id":223}],[{"start":{"row":66,"column":0},"end":{"row":72,"column":14},"action":"remove","lines":["            var timesObj = {","                meetingName: meetingName,","                day: times[0],","                start: times[3] + ' ' + times[4],","                end: times[6] + ' ' + times[7],","                type: times[10]","            };"],"id":224},{"start":{"row":65,"column":16},"end":{"row":66,"column":0},"action":"remove","lines":["",""]},{"start":{"row":65,"column":12},"end":{"row":65,"column":16},"action":"remove","lines":["    "]},{"start":{"row":65,"column":8},"end":{"row":65,"column":12},"action":"remove","lines":["    "]}],[{"start":{"row":52,"column":12},"end":{"row":52,"column":15},"action":"insert","lines":["// "],"id":225},{"start":{"row":53,"column":12},"end":{"row":53,"column":15},"action":"insert","lines":["// "]},{"start":{"row":54,"column":12},"end":{"row":54,"column":15},"action":"insert","lines":["// "]},{"start":{"row":55,"column":12},"end":{"row":55,"column":15},"action":"insert","lines":["// "]}],[{"start":{"row":60,"column":12},"end":{"row":60,"column":16},"action":"remove","lines":["    "],"id":226},{"start":{"row":60,"column":8},"end":{"row":60,"column":12},"action":"remove","lines":["    "]},{"start":{"row":60,"column":4},"end":{"row":60,"column":8},"action":"remove","lines":["    "]},{"start":{"row":60,"column":0},"end":{"row":60,"column":4},"action":"remove","lines":["    "]},{"start":{"row":59,"column":39},"end":{"row":60,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"remove","lines":["    "],"id":227},{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":65,"column":34},"end":{"row":66,"column":0},"action":"remove","lines":["",""],"id":228}],[{"start":{"row":70,"column":8},"end":{"row":70,"column":19},"action":"remove","lines":["meetingList"],"id":229},{"start":{"row":70,"column":8},"end":{"row":70,"column":22},"action":"insert","lines":["afterAddresses"]}],[{"start":{"row":74,"column":8},"end":{"row":74,"column":9},"action":"remove","lines":["}"],"id":230},{"start":{"row":74,"column":4},"end":{"row":74,"column":8},"action":"remove","lines":["    "]}],[{"start":{"row":68,"column":8},"end":{"row":68,"column":19},"action":"remove","lines":["thisMeeting"],"id":231},{"start":{"row":68,"column":8},"end":{"row":68,"column":22},"action":"insert","lines":["afterAddresses"]}],[{"start":{"row":70,"column":28},"end":{"row":70,"column":39},"action":"remove","lines":["thisMeeting"],"id":232},{"start":{"row":70,"column":28},"end":{"row":70,"column":42},"action":"insert","lines":["afterAddresses"]}],[{"start":{"row":68,"column":41},"end":{"row":69,"column":0},"action":"remove","lines":["",""],"id":233}],[{"start":{"row":59,"column":16},"end":{"row":59,"column":17},"action":"remove","lines":[" "],"id":234},{"start":{"row":59,"column":15},"end":{"row":59,"column":16},"action":"remove","lines":[" "]},{"start":{"row":59,"column":14},"end":{"row":59,"column":15},"action":"remove","lines":[" "]}],[{"start":{"row":59,"column":14},"end":{"row":59,"column":15},"action":"insert","lines":[";"],"id":235}],[{"start":{"row":59,"column":13},"end":{"row":59,"column":14},"action":"remove","lines":[" "],"id":236}],[{"start":{"row":63,"column":8},"end":{"row":64,"column":0},"action":"remove","lines":["",""],"id":237},{"start":{"row":63,"column":4},"end":{"row":63,"column":8},"action":"remove","lines":["    "]},{"start":{"row":63,"column":0},"end":{"row":63,"column":4},"action":"remove","lines":["    "]},{"start":{"row":62,"column":16},"end":{"row":63,"column":0},"action":"remove","lines":["",""]},{"start":{"row":62,"column":12},"end":{"row":62,"column":16},"action":"remove","lines":["    "]},{"start":{"row":62,"column":8},"end":{"row":62,"column":12},"action":"remove","lines":["    "]},{"start":{"row":62,"column":4},"end":{"row":62,"column":8},"action":"remove","lines":["    "]}],[{"start":{"row":62,"column":0},"end":{"row":62,"column":4},"action":"remove","lines":["    "],"id":238},{"start":{"row":61,"column":12},"end":{"row":62,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":69,"column":5},"end":{"row":69,"column":6},"action":"remove","lines":[" "],"id":239},{"start":{"row":69,"column":4},"end":{"row":69,"column":5},"action":"remove","lines":[" "]},{"start":{"row":69,"column":0},"end":{"row":69,"column":4},"action":"remove","lines":["    "]},{"start":{"row":68,"column":16},"end":{"row":69,"column":10},"action":"remove","lines":["","          "]},{"start":{"row":68,"column":12},"end":{"row":68,"column":16},"action":"remove","lines":["    "]},{"start":{"row":68,"column":8},"end":{"row":68,"column":12},"action":"remove","lines":["    "]},{"start":{"row":68,"column":4},"end":{"row":68,"column":8},"action":"remove","lines":["    "]},{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"remove","lines":["    "]},{"start":{"row":67,"column":16},"end":{"row":68,"column":0},"action":"remove","lines":["",""]},{"start":{"row":67,"column":12},"end":{"row":67,"column":16},"action":"remove","lines":["    "]},{"start":{"row":67,"column":8},"end":{"row":67,"column":12},"action":"remove","lines":["    "]},{"start":{"row":67,"column":4},"end":{"row":67,"column":8},"action":"remove","lines":["    "]}],[{"start":{"row":67,"column":0},"end":{"row":67,"column":4},"action":"remove","lines":["    "],"id":240},{"start":{"row":66,"column":44},"end":{"row":67,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":69,"column":25},"end":{"row":69,"column":29},"action":"remove","lines":["1000"],"id":241},{"start":{"row":69,"column":25},"end":{"row":69,"column":26},"action":"insert","lines":["2"]},{"start":{"row":69,"column":26},"end":{"row":69,"column":27},"action":"insert","lines":["0"]},{"start":{"row":69,"column":27},"end":{"row":69,"column":28},"action":"insert","lines":["0"]},{"start":{"row":69,"column":28},"end":{"row":69,"column":29},"action":"insert","lines":["0"]}],[{"start":{"row":66,"column":0},"end":{"row":67,"column":4},"action":"remove","lines":["        afterAddresses.push(afterAddresses);","    "],"id":242},{"start":{"row":65,"column":41},"end":{"row":66,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":38,"column":0},"end":{"row":39,"column":0},"action":"remove","lines":["    let geocode = [];",""],"id":243},{"start":{"row":37,"column":0},"end":{"row":38,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":49,"column":0},"end":{"row":53,"column":16},"action":"remove","lines":["            // afterAddresses['geocode'] = {","            //         latitude: lat,","            //         longitude: lon","            //     };","                "],"id":244},{"start":{"row":48,"column":81},"end":{"row":49,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":55,"column":0},"end":{"row":56,"column":0},"action":"remove","lines":["            geocode.push(latLong);",""],"id":245}],[{"start":{"row":54,"column":12},"end":{"row":55,"column":0},"action":"remove","lines":["",""],"id":246},{"start":{"row":54,"column":8},"end":{"row":54,"column":12},"action":"remove","lines":["    "]},{"start":{"row":54,"column":4},"end":{"row":54,"column":8},"action":"remove","lines":["    "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":4},"action":"remove","lines":["    "]},{"start":{"row":53,"column":12},"end":{"row":54,"column":0},"action":"remove","lines":["",""]},{"start":{"row":53,"column":8},"end":{"row":53,"column":12},"action":"remove","lines":["    "]}],[{"start":{"row":53,"column":4},"end":{"row":53,"column":8},"action":"remove","lines":["    "],"id":247},{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":52,"column":14},"end":{"row":53,"column":0},"action":"remove","lines":["",""],"id":248}],[{"start":{"row":54,"column":22},"end":{"row":54,"column":23},"action":"remove","lines":["."],"id":249},{"start":{"row":54,"column":22},"end":{"row":54,"column":23},"action":"insert","lines":["["]},{"start":{"row":54,"column":23},"end":{"row":54,"column":24},"action":"insert","lines":["'"]}],[{"start":{"row":54,"column":31},"end":{"row":54,"column":32},"action":"insert","lines":["'"],"id":250},{"start":{"row":54,"column":32},"end":{"row":54,"column":33},"action":"insert","lines":["]"]}],[{"start":{"row":54,"column":36},"end":{"row":54,"column":43},"action":"remove","lines":["geocode"],"id":251},{"start":{"row":54,"column":36},"end":{"row":54,"column":43},"action":"insert","lines":["latLong"]}],[{"start":{"row":46,"column":12},"end":{"row":46,"column":15},"action":"remove","lines":["// "],"id":252}],[{"start":{"row":46,"column":0},"end":{"row":47,"column":0},"action":"remove","lines":["            afterAddresses.push(latLong);",""],"id":253}],[{"start":{"row":51,"column":14},"end":{"row":52,"column":0},"action":"insert","lines":["",""],"id":254},{"start":{"row":52,"column":0},"end":{"row":52,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":52,"column":12},"end":{"row":53,"column":0},"action":"insert","lines":["            afterAddresses.push(latLong);",""],"id":255}],[{"start":{"row":52,"column":11},"end":{"row":52,"column":24},"action":"remove","lines":["             "],"id":256}],[{"start":{"row":52,"column":11},"end":{"row":52,"column":12},"action":"insert","lines":[" "],"id":257}],[{"start":{"row":55,"column":8},"end":{"row":55,"column":11},"action":"insert","lines":["// "],"id":258}],[{"start":{"row":52,"column":0},"end":{"row":53,"column":0},"action":"remove","lines":["            afterAddresses.push(latLong);",""],"id":259},{"start":{"row":51,"column":14},"end":{"row":52,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":53,"column":47},"end":{"row":54,"column":0},"action":"insert","lines":["",""],"id":260},{"start":{"row":54,"column":0},"end":{"row":54,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":54,"column":8},"end":{"row":55,"column":0},"action":"insert","lines":["            afterAddresses.push(latLong);",""],"id":261}],[{"start":{"row":54,"column":16},"end":{"row":54,"column":20},"action":"remove","lines":["    "],"id":262},{"start":{"row":54,"column":12},"end":{"row":54,"column":16},"action":"remove","lines":["    "]},{"start":{"row":54,"column":8},"end":{"row":54,"column":12},"action":"remove","lines":["    "]}],[{"start":{"row":54,"column":37},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":317},{"start":{"row":55,"column":0},"end":{"row":55,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":55,"column":8},"end":{"row":57,"column":1},"action":"insert","lines":["for (i in afterAddresses){","    AAaddresses.push(afterAddresses[i]['streetInfo']);","}"],"id":318}],[{"start":{"row":55,"column":4},"end":{"row":55,"column":8},"action":"remove","lines":["    "],"id":319}],[{"start":{"row":56,"column":0},"end":{"row":57,"column":0},"action":"remove","lines":["    AAaddresses.push(afterAddresses[i]['streetInfo']);",""],"id":320},{"start":{"row":56,"column":0},"end":{"row":56,"column":37},"action":"insert","lines":["        afterAddresses.push(latLong);"]}],[{"start":{"row":56,"column":37},"end":{"row":58,"column":4},"action":"insert","lines":["","        ","    "],"id":321}],[{"start":{"row":54,"column":8},"end":{"row":54,"column":11},"action":"insert","lines":["// "],"id":322}],[{"start":{"row":57,"column":4},"end":{"row":57,"column":8},"action":"remove","lines":["    "],"id":323},{"start":{"row":57,"column":0},"end":{"row":57,"column":4},"action":"remove","lines":["    "]},{"start":{"row":56,"column":37},"end":{"row":57,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":66,"column":3},"action":"remove","lines":["// dependencies","var request = require('request'); // npm install request","var async = require('async'); // npm install async","const fs = require('fs');","const dotenv = require('dotenv'); // npm install dotenv","","// TAMU api key","dotenv.config();","const apiKey = process.env.TAMU_KEY;","","// geocode addresses","var rawAddresses = fs.readFileSync('data/AA01.json');","var afterAddresses = JSON.parse(rawAddresses);","var AAaddresses = [];","","var i;","for (i in afterAddresses){","    AAaddresses.push(afterAddresses[i]['streetInfo']);","}","","console.log (AAaddresses);","","","// var first = false;","","","// eachSeries in the async module iterates over an array and operates on each item in the array in series","async.eachSeries(AAaddresses, function(value, callback) {","    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';","    apiRequest += 'streetAddress=' + value.split(',').join('%20');","    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;","    apiRequest += '&format=json&version=4.01';","    ","//      if (first===false){","//      console.log(apiRequest);","//      first=true;","//  }","","    request(apiRequest, function(err, resp, body) {","        if (err) {throw err;}","        else {","            var tamuGeo = JSON.parse(body);","            // var latLong = {}; ","            // latLong.address = tamuGeo['InputAddress']['StreetAddress'];","            // latLong.lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];","            // latLong.lng = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];","            var lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];","            var lon = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];","            var latLong = {","                    latitude: lat,","                    longitude: lon     ","            };","        }","        // afterAddresses['geocode'] = latLong;","        // afterAddresses.push(latLong);","    for (i in afterAddresses){","        afterAddresses.push(latLong);","    }","","    });","    setTimeout(callback, 2000);","}, function() {","    fs.writeFileSync('data/AA01Geo.json', JSON.stringify(afterAddresses));","    console.log('*** *** *** *** ***');","    console.log('Number of meetings in this zone: ');","    console.log(AAaddresses.length);","});"],"id":325},{"start":{"row":0,"column":0},"end":{"row":68,"column":3},"action":"insert","lines":["// dependencies","var request = require('request'); // npm install request","var async = require('async'); // npm install async","const fs = require('fs');","const dotenv = require('dotenv'); // npm install dotenv","","// TAMU api key","dotenv.config();","const apiKey = process.env.TAMU_KEY;","","// geocode addresses","var rawAddresses = fs.readFileSync('data/AA01.json');","var afterAddresses = JSON.parse(rawAddresses);","var AAaddresses = [];","","var i;","for (i in afterAddresses){","    AAaddresses.push(afterAddresses[i]['streetInfo']);","}","","// var latLong = [{\"latitude\":\"40.7132514\",\"longitude\":\"-74.002398\"},{\"latitude\":\"40.7132514\",\"longitude\":\"-74.002398\"},{\"latitude\":\"40.7147965\",\"longitude\":\"-73.9990363\"},{\"latitude\":\"40.7080393\",\"longitude\":\"-74.0042361\"},{\"latitude\":\"40.7091732\",\"longitude\":\"-74.0080677\"},{\"latitude\":\"40.7080393\",\"longitude\":\"-74.0042361\"},{\"latitude\":\"40.7132514\",\"longitude\":\"-74.002398\"},{\"latitude\":\"40.7125016\",\"longitude\":\"-74.0094639\"},{\"latitude\":\"40.7132514\",\"longitude\":\"-74.002398\"},{\"latitude\":\"40.7125016\",\"longitude\":\"-74.0094639\"},{\"latitude\":\"40.6344072\",\"longitude\":\"-74.1170382\"},{\"latitude\":\"40.7143477\",\"longitude\":\"-74.0130151\"},{\"latitude\":\"40.7080393\",\"longitude\":\"-74.0042361\"},{\"latitude\":\"40.7080393\",\"longitude\":\"-74.0042361\"},{\"latitude\":\"40.7132514\",\"longitude\":\"-74.002398\"},{\"latitude\":\"40.7144166\",\"longitude\":\"-73.9843646\"},{\"latitude\":\"40.7080393\",\"longitude\":\"-74.0042361\"},{\"latitude\":\"40.7125016\",\"longitude\":\"-74.0094639\"},{\"latitude\":\"40.7132514\",\"longitude\":\"-74.002398\"},{\"latitude\":\"40.7144166\",\"longitude\":\"-73.9843646\"},{\"latitude\":\"40.6344072\",\"longitude\":\"-74.1170382\"},{\"latitude\":\"40.6344072\",\"longitude\":\"-74.1170382\"}];","// for (var i = 0; i < afterAddresses.length; i++) {","//         afterAddresses[i][\"geocode\"]=latLong[i];","// }","","// console.log (afterAddresses);","","// eachSeries in the async module iterates over an array and operates on each item in the array in series","async.eachSeries(AAaddresses, function(value, callback) {","    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';","    apiRequest += 'streetAddress=' + value.split(',').join('%20');","    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;","    apiRequest += '&format=json&version=4.01';","    ","//      if (first===false){","//      console.log(apiRequest);","//      first=true;","//  }","","    request(apiRequest, function(err, resp, body) {","        if (err) {throw err;}","        else {","            var tamuGeo = JSON.parse(body);","            var latLong = []; ","            // var ll = {};","            // latLong.address = tamuGeo['InputAddress']['StreetAddress'];","            // latLong.lat = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];","            // latLong.lng = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];","            var lat = tamuGeo[\"OutputGeocodes\"][0][\"OutputGeocode\"][\"Latitude\"];","            var lon = tamuGeo[\"OutputGeocodes\"][0][\"OutputGeocode\"][\"Longitude\"];","            var ll = {","                    latitude: lat,","                    longitude: lon     ","            };","            latLong.push(ll);","        }","","            for (var i = 0; i < afterAddresses.length; i++) {","                afterAddresses[i][\"geocode\"]=latLong[i];","            }","","    });","    setTimeout(callback, 2000);","}, function() {","    fs.writeFileSync('data/AA01Geo.json', JSON.stringify(afterAddresses));","    console.log('*** *** *** *** ***');","    console.log('Number of meetings in this zone: ');","    console.log(AAaddresses.length);","});"]}],[{"start":{"row":57,"column":0},"end":{"row":59,"column":13},"action":"remove","lines":["            for (var i = 0; i < afterAddresses.length; i++) {","                afterAddresses[i][\"geocode\"]=latLong[i];","            }"],"id":326},{"start":{"row":56,"column":0},"end":{"row":57,"column":0},"action":"remove","lines":["",""]},{"start":{"row":55,"column":9},"end":{"row":56,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":54,"column":29},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":327},{"start":{"row":55,"column":0},"end":{"row":55,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":55,"column":12},"end":{"row":57,"column":13},"action":"insert","lines":["            for (var i = 0; i < afterAddresses.length; i++) {","                afterAddresses[i][\"geocode\"]=latLong[i];","            }"],"id":328}],[{"start":{"row":55,"column":12},"end":{"row":55,"column":24},"action":"remove","lines":["            "],"id":329}],[{"start":{"row":55,"column":0},"end":{"row":57,"column":13},"action":"remove","lines":["            for (var i = 0; i < afterAddresses.length; i++) {","                afterAddresses[i][\"geocode\"]=latLong[i];","            }"],"id":330},{"start":{"row":54,"column":29},"end":{"row":55,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":59,"column":15},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":331},{"start":{"row":60,"column":0},"end":{"row":60,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":60,"column":4},"end":{"row":62,"column":13},"action":"insert","lines":["            for (var i = 0; i < afterAddresses.length; i++) {","                afterAddresses[i][\"geocode\"]=latLong[i];","            }"],"id":332}],[{"start":{"row":43,"column":0},"end":{"row":44,"column":0},"action":"remove","lines":["            var latLong = []; ",""],"id":333}],[{"start":{"row":18,"column":1},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":334}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["            var latLong = []; ",""],"id":335}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":12},"action":"remove","lines":["            "],"id":336}],[{"start":{"row":56,"column":9},"end":{"row":57,"column":0},"action":"remove","lines":["",""],"id":337}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":67,"column":3},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1572303611613,"hash":"f3f85db831dfde6fde344fda3c651b0bb8531b97"}
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import * as WalkService from "../../services/WalkService";
var formuser = function () {
    var router = useRouter();
    var _id = router.query._id;
    var _a = useState({}), walkRecord = _a[0], setWalkRecord = _a[1];
    useEffect(function () {
        WalkService.getWalk(Number(_id)).then(function (walk) { return setWalkRecord(walk); });
    }, [_id]);
    return className = { styles: styles, : .title } > Walk;
    Record < /h2>
        < div;
    className = "record-div-outer" >
        {
            walkRecord: walkRecord,
            : .poo !== undefined && walkRecord.pee !== undefined ? className = "record-div" >
                POO : { walkRecord: walkRecord, : .poo } < /label>
                < label > PEE
        };
    {
        walkRecord.pee;
    }
    /label>
        < /div>;
};
("We unfortunately don't have any pee or poo data yet!");
/div>
    < />;
;
;
export default formuser;
//# sourceMappingURL=TS%5B_id%5D.js.map
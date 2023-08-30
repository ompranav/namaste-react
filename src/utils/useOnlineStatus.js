import { useEffect, useState } from "react";

const useOnlineStatus = ()=> {
    const [OnlineStatus,setonlinestatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", (event) => {
            setonlinestatus(false)
        });
        

        window.addEventListener("online", (event) => {
            setonlinestatus(true)
        });

    }, []);

return OnlineStatus;
}
export default useOnlineStatus;
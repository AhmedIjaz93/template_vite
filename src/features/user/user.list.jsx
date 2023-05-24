import { useEffect, useState } from "react";

import "./createUser.css";
import { getUsers } from "../../services/apis/userService";
import LoaderSpinner from "../../components/general/loader/loader.spinner";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const userList = await getUsers({ _page: pageNo, _limit: 7 });
      setUserList(userList);
      setLoading(false);
    }, 3000);
  }, [pageNo]);

  const onButtonClick = (value) => {
    console.log(value);
    if(value == 'previous') {
      setPageNo(prevState=>prevState-1)
    } else {
      setPageNo(prevState=>prevState+1)
    }
  }

  return (
    <div>
      <div>User Listo</div>
      {!loading ? (
        <>
          {userList?.length &&
            userList?.map((user, index) => {
              return <div key={user?.id}>{`${user?.id}: ${user?.title}`}</div>;
            })}
          <button id="prevBtn" className="btn btn-primary" onClick={()=>onButtonClick('previous')} disabled={pageNo<=1}>Prev</button> <button id="nextBtn" className="btn btn-primary" onClick={()=>onButtonClick('next  ')}>Next</button>
        </>
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
};

export default UserList;

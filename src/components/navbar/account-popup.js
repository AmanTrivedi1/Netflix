"use client";

export default function AccountPopup({
  accounts,
  setLoggedInAccount,
  signOut,
  loggedInAccount,
  setPageLoader,
}) {
  return (
    <div className="px-8 py-8 fixed top-[50px] gap-3 flex flex-col items-start right-[45px] bg-black opacity-[.85] z-[999]">
      <div className="flex flex-col gap-3">
        {accounts && accounts.length
          ? accounts
              .filter((item) => item._id !== loggedInAccount?._id)
              .map((account) => (
                <div
                  onClick={() => {
                    setLoggedInAccount(null);
                    sessionStorage.removeItem("loggedInAccount");
                  }}
                  className="cursor-pointer flex gap-5"
                  key={account._id}
                >
                  <img
                    src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                    alt="Current Profile"
                    className="max-w-[30px] rounded min-w-[20px] max-h-[30px] min-h-[20px] object-cover w-[30px] h-[30px]"
                  />
                  <p className="mb-4">{account.name}</p>
                </div>
              ))
          : null}
      </div>
      <div>
        <button
          onClick={() => {
            setPageLoader(true);
            signOut();
            setLoggedInAccount(null);
            sessionStorage.removeItem("loggedInAccount");
          }}
        >
          Sign out of Netflix
        </button>
      </div>
    </div>
  );
}

import toast from "react-hot-toast";

const getStorageItem = () => {
    const getData = localStorage.getItem('applyJob');
    return getData ? JSON.parse(getData) : [];
};


const setStorageItem = (id, title) => {
    const havingData = getStorageItem();


    if (!havingData.includes(id)) {
        havingData.push(id);
        localStorage.setItem("applyJob", JSON.stringify(havingData));


        toast.success(`${title} Job Apply Success`);
        return;
    }


    toast.error(`You have already applied for the ${title} job`, {
        style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
        },
        iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
        },
    });
};

export { getStorageItem, setStorageItem };

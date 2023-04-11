export const getChangedData = (fileds, data) => {
    const changedData = {};

    Object.keys(fileds).forEach((key) => {
        if (fileds[key] !== data[key] && fileds[key] !== "") {
            changedData[key] = fileds[key];
        }
    });
    return changedData;
};

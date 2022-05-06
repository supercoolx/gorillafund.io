import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export const timeAgoFormat = str => {
    if(!str) return "";
    const date = new Date(str);
    return timeAgo.format(date);
}

export const nFormatter = (num: number | string, digits: number) => {
    if(typeof num === 'string') num = parseInt(num);
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

export const textSlice = (text: string, length: number) => text.slice(0, length) + (text.length > length ? "..." : "");

export const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');

export const addressFormat = (address: string) => address ? address.slice(0, 6) + '...' + address.slice(address.length - 4, address.length) : "";

export const getUserName = user => {
    const fullName = (user?.firstName || "") + ' ' + (user?.lastName || "");
    if(fullName.trim()) return fullName;
    if(user?.username) return '@' + user.username;
    if(user?.walletAddress) return addressFormat(user.walletAddress);
    return "";
}
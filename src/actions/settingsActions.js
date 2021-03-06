import {
    DISABLE_BALANCE_ON_ADD,
    DISABLE_BALANCE_ON_EDIT,
    ALLOW_REGISTRATION
} from "./types";

export const setDisableBalanceOnAdd = () => {
    // pegando configs do localstorage
    const settings = JSON.parse(localStorage.getItem("settings"));

    // mudando valores
    settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

    // colocando de volta no localstorage
    localStorage.setItem("settings", JSON.stringify(settings));

    return {
        type: DISABLE_BALANCE_ON_ADD,
        payload: settings.disableBalanceOnAdd
    };
};
export const setDisableBalanceOnEdit = () => {
    // pegando configs do localstorage
    const settings = JSON.parse(localStorage.getItem("settings"));

    // mudando valores
    settings.disableBalanceOnEdit = !settings.disableBalanceOEdit;

    // colocando de volta no localstorage
    localStorage.setItem("settings", JSON.stringify(settings));

    return {
        type: DISABLE_BALANCE_ON_EDIT,
        payload: settings.disableBalanceOEdit
    };
};
export const setAllowRegistration = () => {
    // pegando configs do localstorage
    const settings = JSON.parse(localStorage.getItem("settings"));

    // mudando valores
    settings.allowRegistration = !settings.allowRegistration;

    // colocando de volta no localstorage
    localStorage.setItem("settings", JSON.stringify(settings));
    return {
        type: ALLOW_REGISTRATION,
        payload: settings.allowRegistration
    };
};

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnWillUpdate(clientAPI) {
    let dialogs = clientAPI.nativescript.uiDialogsModule;
    return dialogs.confirm("Update now?").then((result) => {
        console.log("Update now? " + result);
        if (result === true) {
            return clientAPI.executeAction('/flexso_mdk_parking/Actions/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}
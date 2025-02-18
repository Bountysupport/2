$(document).ready(function () {
    window.usePush = function (pushText, pushClass) {
        const randomClassNamePush = Math.random().toString(36).substring(7);
        const randomClassNameTimer = Math.random().toString(36).substring(7);
        const pushClassId = `${pushClass} notification ${randomClassNamePush}`;
        const pushTimer = `<div class="pushNotificationTimer" id="${randomClassNameTimer}"></div>`;

        console.log(pushClass);

        Toastify({
            text: `${pushText}`,
            className: pushClassId,
            duration: 5000,
            offset: { x: 50, y: 10 },
        }).showToast();

        $(`.${randomClassNamePush}`).append(pushTimer);
        $(`#${randomClassNameTimer}`).animate({ width: "0%" }, 5100);

        if (pushClass === "error" && "vibrate" in navigator) {
            navigator.vibrate([100, 50, 100]);
        }
    };

    window.usePushNative = function (pushText, pushClass) {
        const pushNativeClass = `${pushClass} pushNative`;

        Toastify({
            text: `${pushText}`,
            className: pushNativeClass,
            duration: 34384383,
            close: false,
            offset: { x: 50, y: 10 },
        }).showToast();

        if (pushClass === "error" && "vibrate" in navigator) {
            navigator.vibrate([100, 50, 100]);
        }
    };

    // usePush("Товар додано у кошик ✅", "success");
    // usePush("Товар додано у збережене ✅", "success");
    // usePush("Товар додано у збережене ✅", "success");
    // usePushNative("Увійдіть в особистий кабінет, щоб додати товар у збережене 🔔", "error");
    // usePushNative("Заповніть необхідні поля 🔔", "error");
});

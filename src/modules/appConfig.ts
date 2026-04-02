import { graphState } from "./graphState";

export function saveQuality(quality: number) {
	localStorage.setItem("quality", String(quality));
}

export function saveTheme(dark: boolean) {
	localStorage.setItem("dark", String(dark));
}

export function changeTheme(darkMode: boolean) {
	const html = document.documentElement;
	html.removeAttribute("data-theme");

	if (darkMode) {
		html.setAttribute("data-theme", "dark");
	} else {
		html.setAttribute("data-theme", "light");
	}

	saveTheme(darkMode);
}

export function saveShowName(showName: boolean) {
	localStorage.setItem("showName", String(showName));
}

export function saveShowTypes(showTypes: boolean) {
	localStorage.setItem("showTypes", String(showTypes));
}

export function saveShowTotal(showTotal: boolean) {
	localStorage.setItem("showTotal", String(showTotal));
}

// NEW: Saves whether the Base Stat Product should be shown
export function saveShowBaseStatProduct(showBaseStatProduct: boolean) {
	localStorage.setItem("showBaseStatProduct", String(showBaseStatProduct));
}

export function loadSettings() {
	const quality = localStorage.getItem("quality");
	const dark = localStorage.getItem("dark");
	let darkBool = false;
	const showName = localStorage.getItem("showName");
	const showTypes = localStorage.getItem("showTypes");
	const showTotal = localStorage.getItem("showTotal");
	// NEW: Retrieve showBaseStatProduct from localStorage
	const showBaseStatProduct = localStorage.getItem("showBaseStatProduct");

	const qSel = document.getElementById("quality-select") as HTMLSelectElement;
	const themeSw = document.getElementById("theme") as HTMLInputElement;

	// ------Quality------
	if (quality !== null) {
		qSel.value = quality;
	}

	// ------Dark------
	if (dark === "true") {
		darkBool = true;
	}

	changeTheme(darkBool);
	themeSw.checked = darkBool;

	// ------showName, showTypes, showTotal, showBaseStatProduct------
	// If each variable is undefined or null,
	// graphState should be true because it hasn't been changed
	// in local storage yet.
	if (showName === "false") {
		graphState.showName = false;
	} else {
		graphState.showName = true;
	}
	if (showTypes === "false") {
		graphState.showTypes = false;
	} else {
		graphState.showTypes = true;
	}
	if (showTotal === "false") {
		graphState.showTotal = false;
	} else {
		graphState.showTotal = true;
	}
	// NEW: Load setting for showBaseStatProduct
	if (showBaseStatProduct === "false") {
		graphState.showBaseStatProduct = false;
	} else {
		graphState.showBaseStatProduct = true;
	}
}

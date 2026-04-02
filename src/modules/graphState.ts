import { reactive } from "vue";

const defaultStat = 5;

export const graphState = reactive({
	name: "Name",
	hp: defaultStat,
	att: defaultStat,
	def: defaultStat,
	spA: defaultStat,
	spD: defaultStat,
	spe: defaultStat,
	total: 30, // Base Stat Total
	baseStatProduct: 1, // NEW: Initialize Base Stat Product to 1 for multiplication
	type1: "none",
	type2: "none",
	showName: true,
	showTypes: true,
	showTotal: true, // This likely refers to showing the Base Stat Total
	// Potentially add a new property here to control showing BSP:
	// showBaseStatProduct: false,

	setName(newName: string) {
		this.name = newName;
	},
	setHp(stat: number) {
		this.hp = stat;
		this.updateTotal(); // Keep updating total
		// No need to update product here, as it's set once per fetch
	},
	setAtt(stat: number) {
		this.att = stat;
		this.updateTotal();
	},
	setDef(stat: number) {
		this.def = stat;
		this.updateTotal();
	},
	setSpA(stat: number) {
		this.spA = stat;
		this.updateTotal();
	},
	setSpD(stat: number) {
		this.spD = stat;
		this.updateTotal();
	},
	setSpe(stat: number) {
		this.spe = stat;
		this.updateTotal();
	},
	updateTotal() {
		this.total =
			Number(this.hp) +
			Number(this.att) +
			Number(this.def) +
			Number(this.spA) +
			Number(this.spD) +
			Number(this.spe);
		// I hate javascript (comment remains, understandable!)
	},
	// NEW: Setter for Base Stat Product
	setBaseStatProduct(product: number) {
		this.baseStatProduct = product;
	},
	setType1(newType: string) {
		this.type1 = newType;
	},
	setType2(newType: string) {
		this.type2 = newType;
	},
});

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	Name: "StatBar",
	props: {
		barId: {
			type: String,
			default: "",
		},
		label: String,
		stat: Number,
		isTotal: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		adjustBarWidth() {
			const bar = document.getElementById(this.barId);
			let wid = 0;

			if (this.stat === undefined || bar === undefined || bar === null) {
				return;
			}

			if (this.isTotal) {
				if (this.barId === "bar-tot") {
					wid = (this.stat / 700) * 100;
				} else if (this.barId === "bar-bsp") {
					// Max Product Bar is (700/6)^6, floored
					const MAX_PRODUCT_VALUE = Math.floor(Math.pow((700 / 6), 6));
					wid = (this.stat / MAX_PRODUCT_VALUE) * 100;
				}
			} else {
				wid = (this.stat / 180) * 100;
			}

			if (wid > 100) {
				wid = 100;
			}

			if (wid < 2) {
				wid = 2;
			}

			bar.style.width = String(wid) + "%";
		},
		changeContainerColor() {
			const bar = document.getElementById(this.barId);
			const container = bar?.parentElement;

			if (!container) return;

			switch (this.barId) {
				case "bar-hp":
					container.classList.add("bar-hp-container");
					break;
				case "bar-att":
					container.classList.add("bar-att-container");
					break;
				case "bar-def":
					container.classList.add("bar-def-container");
					break;
				case "bar-spA":
					container.classList.add("bar-spA-container");
					break;
				case "bar-spD":
					container.classList.add("bar-spD-container");
					break;
				case "bar-spe":
					container.classList.add("bar-spe-container");
					break;
				case "bar-tot":
					container.classList.add("bar-tot-container");
					break;
				case "bar-bsp":
					container.classList.add("bar-bsp-container");
					break;
			}
		},
	},
	mounted: function () {
		this.adjustBarWidth();
		this.changeContainerColor();
	},
	watch: {
		stat() {
			this.adjustBarWidth();
		},
	},
});
</script>

<template>
	<div class="row flex flex-row items-center gap-x-2">
		<div class="text-container basis-5/12">
			<p class="label self-center">{{ label }}</p>
			<p class="stat">{{ stat }}</p>
		</div>
		<div class="bar-container rounded basis-7/12">
			<div
				class="bar rounded"
				:class="barId"
				:id="barId"
			></div>
		</div>
	</div>
</template>

<style scoped>
.row {
	width: 100%;
}

.bar {
	height: 100%;
}

.bar-container {
	height: 1.7em;
}

.label {
	float: left;
}

.stat {
	float: right;
}

.label,
.stat {
	@apply w-fit p-0;
	font-size: 22px;
}

@media (min-width: 32rem) {
	.text-container {
		@apply basis-1/3;
	}
	.bar-container {
		@apply basis-2/3;
	}
}
</style>

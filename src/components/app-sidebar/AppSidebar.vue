<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img :src="logoURL" alt="logo" />
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">
					<img class="imgIcon" src="../img/icon/arrow-right-svgrepo-com.svg" alt="right">
				</span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="button">
				<span class="material-icons">
					<img class="imgIcon" src="../img/icon/home-1-svgrepo-com.svg" alt="home">
				</span>
				<span class="text">Home</span>
			</router-link>
			<router-link to="/statusPanel" class="button">
				<span class="material-icons">
					<img class="imgIcon" src="../img/icon/panel.svg" alt="status">
				</span>
				<span class="text">Status Panel</span>
			</router-link>
			<router-link to="/messages" class="button">
				<span class="material-icons">
					<img class="imgIcon" src="../img/icon/messages.svg" alt="messages">
				</span>
				<span class="text">Messages</span>
			</router-link>
			<router-link to="/product" class="button">
				<span class="material-icons">
					<img class="imgIcon" src="../img/icon/product.svg" alt="product">
				</span>
				<span class="text">Products</span>
			</router-link>
			<router-link to="/sale" class="button">
				<span class="material-icons">
					<img class="imgIcon" src="../img/icon/sale.svg" alt="sale">
				</span>
				<span class="text">Sale of goods</span>
			</router-link>
			<router-link to="/seller" class="button">
				<span class="material-icons">
					<img class="imgIcon" src="../img/icon/seller.svg" alt="seller">
				</span>
				<span class="text">Seller</span>
			</router-link>
			<router-link to="/customer" class="button">
				<span class="material-icons">
					<img class="imgIcon" src="../img/icon/Customer.svg" alt="Customer">
				</span>
				<span class="text">Customer</span>
			</router-link>
		</div>

		<div class="flex"></div>

		<!-- <div class="menu">
            <router-link to="/settings" class="button">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div> -->
	</aside>
</template>
<script setup>
import { ref } from 'vue'
import logoURL from '../img/logoza.ru.svg'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}
aside {
	display: flex;
	flex-direction: column;

	background-color:#334155;
	color:#f1f5f9;

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
		border: none;
		outline: none;
		.menu-toggle {
			transition: 0.2s ease-in-out;
			background-color:#334155;
			border: none;
			outline: none;
			.material-icons .imgIcon {
				font-size: 2rem;
				 color: #f1f5f9;
				 background-color:#334155;
				transition: 0.2s ease-out;
				border: none;
				outline: none;
			}

			&:hover {
				.material-icons .imgIcon {
					color: #4ade80;
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3,
	.button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: #64748b;;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: #f1f5f9;
				transition: 0.2s ease-in-out;
			}

			.text {
				color: #f1f5f9;
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: #334155;

				.material-icons,
				.text {
					color: #4ade80;
				}
			}

			&.router-link-exact-active {
				background-color:#334155;
				border-right: 5px solid #4ade80;

				.material-icons,
				.text {
					color: #4ade80;
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: #64748b;
		}
	}

	&.is-expanded {
		width: 300px;

		.menu-toggle-wrap {
			top: -3rem;

			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3,
		.button .text {
			opacity: 1;
			color: #f1f5f9;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>
<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item--title">
          Онлайн-сервис <br> доставки еды на дом
        </h2>
        <p class="banner-item--subtitle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
        </p>
      </div>
    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header--title">
          Рестораны
        </h3>
        <input
            type="text"
            class="product-header--search"
            placeholder="Поиск блюд и ресторанов"
        >
      </div>
      <div class="products-wrapper" id="goods-container">
        <div class="products-card" v-for="good in store.goods" :key="good.id">
          <div class="products-card__image">
            <img :src="getUrl(good.image)" :alt="good.image">
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h5 class="products-card__description--name">
                {{ good.title }}
              </h5>
            </div>
            <div class="products-card__description-row">
              <p class="products-card__description--text">
                {{ good.description }}
              </p>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img src="../assets/images/icons/shopping-cart-white.svg" alt="shopping-cart-white">
                </button>
                <span class="products-card__description-controls--price">
                    {{ good.price }} ₽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {store} from "@/store/index.js";

const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}.jpg`, import.meta.url)
}
</script>
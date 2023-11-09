<script setup>
const products = [
  { code: 1, name: "iPhone 13", category: "Electronics", quantity: 100 },
  {
    code: 2,
    name: "Samsung Galaxy S21",
    category: "Electronics",
    quantity: 80,
  },
  { code: 3, name: "MacBook Air", category: "Computers", quantity: 50 },
  { code: 4, name: "Dell XPS 15", category: "Computers", quantity: 60 },
  {
    code: 5,
    name: "Sony PlayStation 5",
    category: "Gaming Consoles",
    quantity: 30,
  },
  {
    code: 6,
    name: "Nintendo Switch",
    category: "Gaming Consoles",
    quantity: 70,
  },
  { code: 7, name: "Nike Air Max 270", category: "Footwear", quantity: 120 },
  { code: 8, name: "Adidas Ultraboost", category: "Footwear", quantity: 90 },
  {
    code: 9,
    name: "Ray-Ban Wayfarer Sunglasses",
    category: "Accessories",
    quantity: 110,
  },
  { code: 10, name: "Fitbit Charge 5", category: "Wearables", quantity: 40 },
];
const selectedProduct = ref([]);

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
const slidervalue = ref(0);
const checked = ref(false);

const date = ref(new Date());
const ingredient = ref(null);
</script>

<template>
  <main
    class="font-body bg-white dark:bg-gray-800 p-10 rounded-xl flex flex-col max-w-3xl"
  >
    <h1 class="mb-6 text-4xl text-black dark:text-white font-bold text-center">
      Tailwind CSS + PrimeVue + SHADCNUI
    </h1>

    <h2 class="mt-6 text-xl font-medium">Buttons</h2>
    <section class="flex flex-row gap-3">
      <Button label="Primary" rounded></Button>
      <Button label="Secondary" rounded severity="secondary"></Button>
      <Button label="Danger" rounded severity="danger"></Button>
      <Button label="Link" rounded severity="link"></Button>
    </section>

    <h2 class="mt-6 text-xl font-medium">Input</h2>
    <section class="flex flex-row gap-3 mb-6">
      <InputText type="text" v-model="value" />
      <div class="flex items-center">
        <Checkbox name="check1" v-model="checked" :binary="true" />
        <label for="check1" class="ml-2"> Cheese </label>
      </div>
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
        class=""
      />
    </section>
    <section class="flex flex-row gap-6 items-center mb-6">
      <Calendar but v-model="date" showIcon />
      <Slider v-model="slidervalue" class="" />
    </section>
    <section class="flex flex-row gap-3 mb-6">
      <div class="flex flex-wrap gap-3">
        <div class="flex items-center">
          <RadioButton
            v-model="ingredient"
            inputId="ingredient1"
            name="pizza"
            value="Cheese"
          />
          <label for="ingredient1" class="ml-2">Cheese</label>
        </div>
        <div class="flex items-center">
          <RadioButton
            v-model="ingredient"
            inputId="ingredient2"
            name="pizza"
            value="Mushroom"
          />
          <label for="ingredient2" class="ml-2">Mushroom</label>
        </div>
        <div class="flex items-center">
          <RadioButton
            v-model="ingredient"
            inputId="ingredient3"
            name="pizza"
            value="Pepper"
          />
          <label for="ingredient3" class="ml-2">Pepper</label>
        </div>
        <div class="flex items-center">
          <RadioButton
            v-model="ingredient"
            inputId="ingredient4"
            name="pizza"
            value="Onion"
          />
          <label for="ingredient4" class="ml-2">Onion</label>
        </div>
      </div>
      <Textarea v-model="value" rows="5" cols="30"></Textarea>
    </section>

    <h2 class="mt-6 text-xl font-medium">Datatable</h2>
    <section>
      <DataTable
        v-model:selection="selectedProduct"
        removableSort
        :value="products"
        tableStyle="min-width: 50rem"
      >
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="code" sortable header="Code"></Column>
        <Column field="name" sortable header="Name"></Column>
        <Column field="category" sortable header="Category"></Column>
        <Column field="quantity" sortable header="Quantity"></Column>
      </DataTable>
    </section>
  </main>
</template>

<style lang="postcss">
body {
  @apply bg-background text-foreground flex items-center justify-center min-h-screen p-10;
}
</style>

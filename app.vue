<script setup lang="ts">
import { useToast } from "primevue/usetoast";

const darkmode = ref(false);
useHead({
  htmlAttrs: {
    class: () => (darkmode.value ? "dark" : ""),
  },
  bodyAttrs: {
    class:
      "font-body bg-background text-foreground flex items-center justify-center min-h-screen",
  },
});

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

const value = ref("");
const valueUser = ref("");
const valuePass = ref("");
const textvalue = ref("");

const toast = useToast();
const showMessage = (severity: any, summary: any, detail: any) => {
  toast.add({ severity, summary, detail }); //, life: 3000
};

const visible = ref(false);
</script>

<template>
  <main class="p-10 flex flex-col max-w-3xl">
    <h1 class="mb-6 text-4xl text-foreground font-bold text-center">
      Tailwind CSS + PrimeVue + SHADCNUI
    </h1>
    <section class="my-6">
      <div>
        <label class="label">Darkmode</label>
        <InputSwitch v-model="darkmode"></InputSwitch>
      </div>
    </section>
    <h2 class="mt-6 mb-2 text-xl font-medium">Buttons</h2>
    <section class="flex flex-row gap-3">
      <Button label="Primary" rounded></Button>
      <Button label="Secondary" rounded severity="secondary"></Button>
      <Button label="Danger" rounded severity="danger"></Button>
      <Button label="Link" rounded link></Button>
    </section>

    <h2 class="mt-6 mb-2 text-xl font-medium">Input</h2>
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
      <Textarea v-model="textvalue" rows="5" cols="30"></Textarea>
    </section>

    <h2 class="mt-6 mb-2 text-xl font-medium">Datatable</h2>
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
    <h2 class="mt-6 mb-2 text-xl font-medium">Container</h2>
    <section>
      <Card>
        <template #title> Simple Card </template>
        <template #subtitle>This is a simple Card</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>
      <div class="mt-6">
        <div class="grid">
          <Skeleton shape="circle" size="5rem"></Skeleton>
          <div>
            <Skeleton class="mb-2"></Skeleton>
            <Skeleton width="10rem" class="mb-2"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
          </div>
        </div>

        <Skeleton height="2rem" class="mb-2"></Skeleton>
        <Skeleton width="10rem" height="4rem"></Skeleton>
      </div>
    </section>
    <h2 class="mt-6 mb-2 text-xl font-medium">Overlay</h2>
    <section>
      <Toast position="bottom-right"></Toast>
      <div class="flex flex-row gap-3">
        <Button
          label="Show Message"
          @click="
            showMessage(
              'info',
              'Scheduled: Catch up',
              'Friday, February 10, 2023 at 5:57 PM'
            )
          "
        ></Button>
        <Button
          label="Show Error"
          @click="
            showMessage('error', 'Error', 'Something went wrong oh noooo!')
          "
        ></Button>
      </div>
      <div class="mt-3">Not sure if we need static messages:</div>
      <Message severity="success"> Success Message Content </Message>
      <Message severity="info"> Info Message Content </Message>
      <Message severity="warn"> Warning Message Content </Message>
      <Message severity="error"> Error Message Content </Message>
      <div class="mb-3"></div>
      <Button @click="visible = true" label="Show Dialog"></Button>
      <Dialog
        v-model:visible="visible"
        modal
        header="Header"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      >
        <template #header>
          <div class="flex flex-col space-y-1.5 text-center sm:text-left">
            <span class="text-lg font-semibold leading-none tracking-tight"
              >Edit profile</span
            >
            <span class="text-sm text-muted-foreground">
              Make changes to your profile here. Click save when you're done.
            </span>
          </div>
        </template>
        <form class="form">
          <div class="form-field">
            <label for="username">Username</label>
            <InputText
              autofocus
              class="col-span-3"
              type="text"
              v-model="valueUser"
            />
          </div>
          <div class="form-field">
            <label for="password">Password</label>
            <InputText class="col-span-3" type="text" v-model="valuePass" />
          </div>
        </form>
        <template #footer>
          <Button rounded label="Save changes" @click="visible = false" />
        </template>
      </Dialog>
    </section>
  </main>
</template>

<style>
.form {
  @apply grid gap-4 py-4;
}
.form-field {
  @apply grid grid-cols-4 items-center gap-4;
}
.label {
  @apply text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right;
}
.form-field > label {
  @apply label;
}
</style>

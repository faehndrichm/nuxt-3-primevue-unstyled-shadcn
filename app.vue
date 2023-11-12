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
const testvalue = ref(false);

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
const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "#ADFA1D",
        borderColor: "#ADFA1D",
        data: [65, 59, 80, 81, 56, 55, 40, 54, 25, 73, 73, 33],
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = `hsl(${documentStyle.getPropertyValue("--foreground")})`;
  const textColorSecondary = `hsl(${documentStyle.getPropertyValue(
    "--muted-foreground"
  )})`;
  return {
    borderRadius: 4,
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };
};
onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});
</script>

<template>
  <header
    class="z-[200] bg-background/80 backdrop-blur-md left-0 top-0 w-screen py-3 px-6 fixed flex flex-row justify-between"
  >
    <div class="w-48"></div>
    <h1
      class="mb-6 text-3xl font-bold leading-tight tracking-tighter text-center"
    >
      Tailwind CSS + PrimeVue + SHADCNUI
    </h1>
    <div class="flex flex-row items-center gap-3">
      <label class="label">Darkmode</label>
      <InputSwitch v-model="darkmode"></InputSwitch>
    </div>
  </header>
  <main class="mt-12 p-10 flex flex-col max-w-3xl">
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

      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
        class=""
      />
    </section>
    <section class="flex flex-row gap-3 mb-6">
      <div class="flex items-center">
        <Checkbox name="check1" v-model="checked" :binary="true" />
        <label for="check1" class="ml-2"> Cheese </label>
      </div>
      <div class="flex flex-row items-center gap-3">
        <label class="label">Test</label>
        <InputSwitch v-model="testvalue"></InputSwitch>
      </div>
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
        <template #title>Explore the Infinite Cosmos</template>
        <template #subtitle>Unveiling the Wonders Beyond Our World</template>
        <template #content>
          <p class="m-0">
            Embark on a journey of cosmic discovery as we delve into the
            mysteries that lie beyond our terrestrial borders. From the
            mesmerizing dance of distant galaxies to the enigmatic realms of
            black holes, our exploration of the cosmos knows no bounds.
          </p>
        </template>
      </Card>
      <div class="my-3"></div>
      <TabView :scrollable="true">
        <TabPanel header="Header I">
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TabPanel>
        <TabPanel header="Header II">
          <p class="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
        <TabPanel header="Header III">
          <p class="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
      </TabView>
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
    <h2 class="mt-6 mb-2 text-xl font-medium">Chart.JS</h2>
    <section>
      <Card>
        <template #header>
          <h3 class="text-base font-semibold leading-none tracking-tight">
            Overview
          </h3>
        </template>
        <template #content>
          <Chart
            type="bar"
            :data="chartData"
            :options="chartOptions"
            class="h-72"
          />
        </template>
      </Card>
      <div class="grid grid-cols-3 gap-6 mt-6">
        <Card>
          <template #header>
            <h3 class="text-base font-semibold leading-none tracking-tight">
              Total Revenue
            </h3>
          </template>
          <template #content>
            <div class="grid">
              <div class="text-2xl font-bold">$45,231.89</div>
              <div class="text-xs text-muted-foreground">
                +20.1% from last month
              </div>
            </div>
          </template>
        </Card>
        <Card>
          <template #header>
            <h3 class="text-base font-semibold leading-none tracking-tight">
              Subscriptions
            </h3>
          </template>
          <template #content>
            <div class="grid">
              <div class="text-2xl font-bold">+2350</div>
              <div class="text-xs text-muted-foreground">
                +180.1% from last month
              </div>
            </div>
          </template>
        </Card>
        <Card>
          <template #header>
            <h3 class="text-base font-semibold leading-none tracking-tight">
              Active Now
            </h3>
          </template>
          <template #content>
            <div class="grid">
              <div class="text-2xl font-bold">+573</div>
              <div class="text-xs text-muted-foreground">
                +201 since last hour
              </div>
            </div>
          </template>
        </Card>
      </div>
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

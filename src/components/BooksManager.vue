<script setup>

</script>

<script>
export default {
    name: "BooksManager",
    data() {
        return {
            books: [],
            newBook: {
                title: "",
                author: "",
                year: 2000,
            }
        };
    },
    methods: {
        async loadBooks() {
            this.books = await getBooks();
        }
    },
    mounted() {
        this.loadBooks();
    }
};
</script>

<template>
    <main class="flex justify-center items-center flex-col">
        <h1 class="">Könyvtár kezelőfelület</h1>
    
    <form class="">
        <div class="">
            <label for="title" class="">Könyv cím:</label>
            <input type="text" name="title" id="" class="border-2 border-stone-200 rounded-lg p-2" />
        </div>
        <div class="">
            <label for="author" class="">Könyv szerzője:</label>
            <input type="text" name="author" id="" class="border-2 border-stone-200 rounded-lg p-2" />
        </div>
        <div class="">
            <label for="year" class="">Könyv megjelenésének éve:</label>
            <input type="number" name="year" id="" class="border-2 border-stone-200 rounded-lg p-2" />
        </div>
        
    </form>

    <table class="">
        <thead class="">
            <tr class="">
                <th class="">Azonosító</th>
                <th class="">Címe</th>
                <th class="">Szerző</th>
                <th class="">Megjelenése éve</th>
                <th class="">Műveletek</th>
            </tr>
        </thead>
        <tbody class="">
            <tr class="" v-for="book in books" :key="book.id">
                <td class="">{{ book.id }}</td>
                <td class="">{{ book.title }}</td>
                <td class="">{{ book.author }}</td>
                <td class="">{{ book.year }}</td>
                <td class=""></td>
            </tr>
        </tbody>
    </table>
    </main>
</template>
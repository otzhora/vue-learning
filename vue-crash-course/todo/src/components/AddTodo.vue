<template>
    <div>
        <form @submit="addTodo">
            <input type="text" name="title" placeholder="Add todo..." v-model="title">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>    
</template>

<script>

export default {
    name: "AddTodo",
    data () {
        return {
            title: ''
        }
    }, 
    methods: {
        addTodo (e) {
            e.preventDefault();
            
            const newTodo = {
                title: this.title,
                completed: false
            }
            this.title = ''
            this.$emit('add-todo', newTodo)
        }
    },
}
</script>

<style scoped>
     form {
         display: flex;
     }

     input[type="text"] {
         flex: 10;
         padding: 5px;
     }

     input[type="submit"] {
         flex: 2;
     }
</style>

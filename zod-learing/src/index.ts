import z from 'zod';

const schema = z.object({
    name:z.string({
        required_error:"Name is required",
        invalid_type_error:"Name must be a string"
    }),
    // age:z.number(),
    // isAlive:z.boolean(),
    // hobbies: z.array(z.string()),
    // address:z.object({
    //    street: z.string(),

    // })
    password:z.number({
        required_error:"Password is required"
    }).min(6),
    confirmPassword:z.number({})
}).refine((data)=>{
    return data.confirmPassword === data.password
},{
    message:"Passwords do not match"
});
 
type CreateUserInput = z.infer<typeof schema>;


const payload:CreateUserInput = {
    name:"Meow",
    password:123123,
    confirmPassword:123123

};


function crateUser(prop:CreateUserInput){
    const result = schema.parse(prop);
}


crateUser(payload);



const result  = schema.parse(payload);
console.log(JSON.stringify(result,null,2));
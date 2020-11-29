# REST API

## Endpoint

#### [https://react-warriors-rest-api.herokuapp.com/api](https://react-warriors-rest-api.herokuapp.com/api)

## Methods

### achievement
    {
        id: Number, 
        title: String, 
        desc: String
    }

### advantage
    {
        id: Number, 
        title: String, 
        desc: String
    }

### competency
    {
        id: Number,
        text: String
    }

### expertise
    {
        id: Number, 
        text: String
    }

### menu
    {
        id: Number, 
        ref: String
        text: String
        drop: [
            {
                ref: String,
                text: String
            }
        ]
    }

### rate
    {
        id: Number,
        title: String,
        price: Number,
        features: [String]
    }

### worker
    {   
        id: Number, 
        name: String, 
        job: String
    }
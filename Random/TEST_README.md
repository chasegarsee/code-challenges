# Vend-O-Matic

Beverage vending machine - Tested Via HTTP before production environment

## Getting Started

- Copy Reopsitory
- Clone to local device
- Open terminal and navigate to root directory
- start local server using node.js

```bash
node index.js
```

## API Endpoints

| Method | Endpoint         | Request Body | Response Code | Response Headers                                                                 | Response Body                        |
| ------ | ---------------- | ------------ | ------------- | -------------------------------------------------------------------------------- | ------------------------------------ |
| GET    | `/inventory`     |              | 200           |                                                                                  | Array of item Quantities. (Integers) |
| GET    | `/inventory:id`  |              | 200           |                                                                                  | Remaining Item Quantities (Integer)  |
| PUT    | `/`              | {"coin":1}   | 204           | X-Coins: \$[# of coins accepted]                                                 |                                      |
| PUT    | `/inventory/:id` |              |               | \* X-Coins: \${# of coins returned } \* X-Inventory-Remaining: \$[item quantity] | {"Quantity": \${# Of Items Vended}}  |
| PUT    | `/inventory/:id` |              |               | X-Coins: \$[# of coins accepted]                                                 |                                      |
| PUT    | `/inventory/:id` |              |               | X-Coins: \$[# of coins accepted]                                                 |                                      |
| DELETE | `/`              |              | 204           | X-Coins: \$[# of coins to be returned]                                           |                                      |

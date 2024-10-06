impl Solution {
    pub fn convert_date_to_binary(date: String) -> String {
        let dates: Vec<&str> = date.split("-").collect();
        let mut ans: Vec<String> = Vec::new();

        for d in dates {
            match d.parse::<i32>() {
                Ok(number) => {
                    ans.push(format!("{:b}", number));

                }
                Err(e) => println!("Ошибка преобразования: {}", e),
            }
        }

        ans.join("-")
    }
}
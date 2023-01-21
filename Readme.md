# Порядок работы
1. Создаем issue, в которой подробно описываем суть проблемы и вешаем лейблы (refactoring, new и т.д.). У этой issue будет свой id. Предположим, это будет xxx.
2. Чтобы начать работу, нужно создать ветку, которая опирается от main. Для этого: `git checkout main`. Потом создаем ветку с именем issue/xxx: `git checkout -b issue/xxx`.
3. Вносим изменения по issue. Важно отметить, что когда работаем над одной issue, в другие не лезем.
4. Когда закончили, делаем коммит: `git add . && git commit -m 'description'`. Описание обязательно должно быть осмысленным и отражать суть того, что нового было сделано в коммите! Можно делать несколько коммитов, разделяя их логически на подзадачи.
5. Чтобы отправить изменения, делаем `git push -u origin issue/xxx`.
6. После этого создаем pull request с этой веткой. В описании при открытии pr обязательно указываем ссылку на issue! Желательно также написать подробное описание для pr.

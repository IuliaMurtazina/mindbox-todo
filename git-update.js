import { execSync } from "child_process";
import process from "process";

// Получаем сообщение коммита и тип изменений из аргументов командной строки
const commitMessage = process.argv[2];
const changeType = process.argv[3];
if (!commitMessage) {
  console.error("Необходимо сообщение коммита.");
  process.exit(1);
}

// Вспомогательная функция для выполнения команд с общими параметрами
function runCommand(command) {
  execSync(command, { stdio: "inherit" });
}

try {
  // Добавляем изменения в индекс
  runCommand("git add .");

  // Форматируем изменённые файлы
  runCommand("yarn lint-staged");

  // Делаем коммит
  runCommand(`git commit -m "${commitMessage}"`);

  // Пушим изменения
  runCommand("git push");

  console.log("Успешно опубликовано!");
} catch (error) {
  console.error("Ошибка при публикации:", error.message);
}

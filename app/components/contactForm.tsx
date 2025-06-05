import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion"; // Импортируем framer-motion

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mwpbpyek");
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  // Сразу очищаем форму при отправке
  useEffect(() => {
    if (state.succeeded) {
      setShowMessage(true); // Показываем сообщение
      setFormData({
        email: "",
        message: "",
      });

      // Таймер, чтобы сообщение исчезло через 5 секунд
      const timer = setTimeout(() => {
        setShowMessage(false); // Скрываем сообщение через 5 секунд
      }, 5000);

      return () => clearTimeout(timer); // Очистить таймер, если компонент удаляется
    }
  }, [state.succeeded]); // После успешной отправки

  // Анимация появления для сообщения об успешной отправке
  const successMessageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Сообщение об успешной отправке */}
      {showMessage && (
        <motion.div
          className="fixed top-5 right-5 text-center bg-white flex justify-between items-center shadow-lg rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={successMessageVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="w-[10px] h-[100px] bg-green-500 z-10"></div>

          <p className="text-green-500 pl-4 pr-4">
            Спасибо! Сообщение отправлено.
          </p>
          {/* Кнопка закрытия сообщения */}
          <button
            onClick={() => setShowMessage(false)}
            className="absolute top-2 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            ×
          </button>
        </motion.div>
      )}

      {/* Форма */}
      <motion.form
        onSubmit={(e) => {
          handleSubmit(e); // Отправка формы
        }}
        className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label htmlFor="email" className="block text-sm text-gray-700">
            Укажите ваш email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-700"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-gray-700">
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="text-gray-700 mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 disabled:opacity-50"
        >
          {state.submitting ? "Отправка..." : "Отправить"}
        </button>
      </motion.form>
    </>
  );
};

export default ContactForm;

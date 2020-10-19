export default (defaultClass, additionalClasses) => {
  if (!additionalClasses || !Array.isArray(additionalClasses))
    return defaultClass;

  const filtered = [defaultClass, ...additionalClasses].filter(
    (className) => !!className
  );
  return filtered.join(" ");
};

function themedData(data, values) {
  return {
    ...data,
    ...Object.fromEntries(Object.entries(values).map(([name, value]) => [
      name,
      value == null ? null : typeof value === 'boolean' ? value ? '' : null : String(value)
    ]))
  }
}

export { themedData }
